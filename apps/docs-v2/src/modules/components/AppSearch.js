import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pathnameToLanguage } from 'docs/src/modules/utils/helpers';
import * as ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { DocSearchModal, useDocSearchKeyboardEvents } from '@docsearch/react';
import Chip from '@mui/material/Chip';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import ToggleOffRoundedIcon from '@mui/icons-material/ToggleOffRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import HandymanRoundedIcon from '@mui/icons-material/HandymanRounded';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import SearchIcon from '@mui/icons-material/Search';
import GlobalStyles from '@mui/material/GlobalStyles';
import { alpha, styled } from '@mui/material/styles';
import { LANGUAGES_SSR } from 'docs/config';
import Link from 'docs/src/modules/components/Link';
import { useTranslate, useUserLanguage } from 'docs/src/modules/utils/i18n';
import useLazyCSS from 'docs/src/modules/utils/useLazyCSS';
import PageContext from 'docs/src/modules/components/PageContext';

const SearchButton = styled('button')(({ theme }) => [
  {
    minHeight: 34,
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    paddingLeft: theme.spacing(0.6),
    [theme.breakpoints.only('xs')]: {
      backgroundColor: 'transparent',
      padding: 0,
      minWidth: 34,
      justifyContent: 'center',
      '& > *:not(.MuiSvgIcon-root)': {
        display: 'none',
      },
    },
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    backgroundColor: (theme.vars || theme).palette.grey[50],
    color: (theme.vars || theme).palette.text.secondary,
    fontSize: theme.typography.pxToRem(14),
    border: `1px solid ${(theme.vars || theme).palette.grey[200]}`,
    borderRadius: 10,
    cursor: 'pointer',
    transitionProperty: 'all',
    transitionDuration: '150ms',
    '&:hover': {
      background: (theme.vars || theme).palette.grey[100],
      borderColor: (theme.vars || theme).palette.grey[300],
    },
  },
  theme.applyDarkStyles({
    backgroundColor: alpha(theme.palette.primaryDark[700], 0.4),
    borderColor: (theme.vars || theme).palette.primaryDark[700],
    '&:hover': {
      background: (theme.vars || theme).palette.primaryDark[700],
      borderColor: (theme.vars || theme).palette.primaryDark[600],
    },
  }),
]);

const SearchLabel = styled('span')(({ theme }) => {
  return {
    marginLeft: theme.spacing(1),
    marginRight: 'auto',
  };
});

const Shortcut = styled('div')(({ theme }) => {
  return {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 700,
    lineHeight: '20px',
    marginLeft: theme.spacing(0.5),
    border: `1px solid ${(theme.vars || theme).palette.grey[200]}`,
    backgroundColor: '#FFF',
    padding: theme.spacing(0, 0.5),
    borderRadius: 7,
    ...theme.applyDarkStyles({
      borderColor: (theme.vars || theme).palette.primaryDark[600],
      backgroundColor: (theme.vars || theme).palette.primaryDark[800],
    }),
  };
});

function NewStartScreen() {
  const startScreenOptions = [
    {
      category: {
        name: 'Getting started',
        icon: <ArticleRoundedIcon className="DocSearch-NewStartScreenTitleIcon" />,
      },
      items: [
        { name: 'Installation', href: '/material-ui/getting-started/installation/' },
        { name: 'Usage', href: '/material-ui/getting-started/usage/' },
        { name: 'Learn', href: '/material-ui/getting-started/learn/' },
      ],
    },
    {
      category: {
        name: 'Popular searches',
        icon: <ToggleOffRoundedIcon className="DocSearch-NewStartScreenTitleIcon" />,
      },
      items: [
        { name: 'Material Icons', href: '/material-ui/material-icons/' },
        { name: 'Text Field', href: '/material-ui/react-text-field/' },
        { name: 'Button', href: '/material-ui/react-button/' },
      ],
    },
    {
      category: {
        name: 'Customization',
        icon: <EditRoundedIcon className="DocSearch-NewStartScreenTitleIcon" />,
      },
      items: [
        { name: 'How to customize', href: '/material-ui/customization/how-to-customize/' },
        { name: 'Theming', href: '/material-ui/customization/theming/' },
        { name: 'Default theme', href: '/material-ui/customization/default-theme/' },
      ],
    },
    {
      category: {
        name: 'System',
        icon: <HandymanRoundedIcon className="DocSearch-NewStartScreenTitleIcon" />,
      },
      items: [
        { name: 'Overview', href: '/system/getting-started/' },
        { name: 'Properties', href: '/system/properties/' },
        { name: 'The sx prop', href: '/system/getting-started/the-sx-prop/' },
      ],
    },
  ];
  return (
    <div className="DocSearch-NewStartScreen">
      {startScreenOptions.map(({ category, items }) => (
        <div key={category.name} className="DocSearch-NewStartScreenCategory">
          <div className="DocSearch-NewStartScreenTitle">
            {category.icon}
            {category.name}
          </div>
          {items.map(({ name, href }) => (
            <NextLink key={name} href={href} className="DocSearch-NewStartScreenItem">
              {name}
              <KeyboardArrowRightRounded className="DocSearch-NewStartScreenItemIcon" />
            </NextLink>
          ))}
        </div>
      ))}
    </div>
  );
}

const displayTagProductId = {
  'material-ui': 'Material UI',
  'joy-ui': 'Joy UI',
  'base-ui': 'Base UI',
  x: 'MUI X',
  system: 'MUI System',
  toolpad: 'Toolpad',
};

function getDisplayTag(hit) {
  if (hit.productId === undefined || hit.productCategoryId === undefined) {
    return null;
  }

  const productInfo = {
    productId: hit.productId,
    productCategoryId: hit.productCategoryId,
  };

  const displayTag =
    displayTagProductId[productInfo.productId] ||
    displayTagProductId[productInfo.productCategoryId];

  if (!displayTag) {
    console.error(
      `getDisplayTag missing mapping for productId: ${productInfo.productId}, pathname: ${hit.pathname}.`,
    );
  }

  return <Chip label={displayTag} size="small" variant="outlined" sx={{ mr: 1 }} />;
}

function DocSearchHit(props) {
  const { children, hit } = props;

  if (hit.pathname) {
    return (
      <Link
        href={hit.pathname}
        as={hit.as}
        sx={{ display: 'flex !important', '& .DocSearch-Hit-Container': { flex: 1, minWidth: 0 } }}
      >
        {children}
        {getDisplayTag(hit)}
      </Link>
    );
  }

  // DocSearch stores the old results in its cache
  // hit.pathname won't be defined for them.
  return <Link href={hit.url}>{children}</Link>;
}

DocSearchHit.propTypes = {
  children: PropTypes.node,
  hit: PropTypes.object.isRequired,
};

export default function AppSearch(props) {
  useLazyCSS(
    'https://cdn.jsdelivr.net/npm/@docsearch/css@3.0.0-alpha.40/dist/style.min.css',
    '#app-search',
  );
  const FADE_DURATION = 100; // ms
  const t = useTranslate();
  const userLanguage = useUserLanguage();
  const searchButtonRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [initialQuery, setInitialQuery] = React.useState(undefined);
  const facetFilterLanguage =
    LANGUAGES_SSR.indexOf(userLanguage) !== -1 ? `language:${userLanguage}` : `language:en`;
  const macOS = window.navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  const onOpen = React.useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);
  const router = useRouter();
  const pageContext = React.useContext(PageContext);

  const keyboardNavigator = {
    navigate({ item }) {
      const as = item.userLanguage !== 'en' ? `/${item.userLanguage}${item.as}` : item.as;
      router.push(item.pathname, as);
    },
  };

  const onClose = React.useCallback(() => {
    const modal = document.querySelector('.DocSearch-Container');
    if (modal) {
      // fade out transition
      modal.style.opacity = 0;
    }
    setIsOpen(false); // DO NOT call setIsOpen inside a timeout (it causes scroll issue).
  }, [setIsOpen]);

  const onInput = React.useCallback(
    (event) => {
      setIsOpen(true);
      setInitialQuery(event.key);
    },
    [setIsOpen, setInitialQuery],
  );

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  });

  React.useEffect(() => {
    const addStartScreen = () => {
      const dropDown = document.querySelector('.DocSearch-Dropdown');
      const isExisting = document.querySelector('.DocSearch-NewStartScreen');
      if (dropDown && !isExisting) {
        dropDown.insertAdjacentHTML(
          'beforeend',
          ReactDOMServer.renderToStaticMarkup(<NewStartScreen />),
        );
      }
    };
    // add transition to Modal
    if (isOpen) {
      const modal = document.querySelector('.DocSearch-Container');
      const searchInput = document.querySelector('.DocSearch-Input');
      if (modal) {
        modal.style.opacity = 1;
        addStartScreen();
      }
      if (searchInput) {
        const handleInput = (event) => {
          const newStartScreen = document.querySelector('.DocSearch-NewStartScreen');
          if (newStartScreen) {
            newStartScreen.style.display = event.target.value !== '' ? 'none' : 'grid';
          }
        };
        searchInput.addEventListener('input', handleInput);
        return () => {
          searchInput.removeEventListener('input', handleInput);
        };
      }
    }
    return () => {};
  }, [isOpen]);

  const search = `${t('algoliaSearch')}…`;

  return (
    <React.Fragment>
      <SearchButton ref={searchButtonRef} onClick={onOpen} {...props}>
        <SearchIcon
          fontSize="small"
          sx={(theme) => ({
            color: 'primary.500',
            ...theme.applyDarkStyles({
              color: 'primary.300',
            }),
          })}
        />
        <SearchLabel>{search}</SearchLabel>
        <Shortcut>
          {/* eslint-disable-next-line material-ui/no-hardcoded-labels */}
          {macOS ? '⌘' : 'Ctrl+'}K
        </Shortcut>
      </SearchButton>
      {isOpen &&
        ReactDOM.createPortal(
          <DocSearchModal
            initialQuery={initialQuery}
            appId="TZGZ85B9TB"
            apiKey="8177dfb3e2be72b241ffb8c5abafa899"
            indexName="material-ui"
            searchParameters={{
              facetFilters: ['version:master', facetFilterLanguage],
              optionalFilters: [`productId:${pageContext.productId}`],
              attributesToRetrieve: [
                // Copied from https://github.com/algolia/docsearch/blob/ce0c865cd8767e961ce3088b3155fc982d4c2e2e/packages/docsearch-react/src/DocSearchModal.tsx#L231
                'hierarchy.lvl0',
                'hierarchy.lvl1',
                'hierarchy.lvl2',
                'hierarchy.lvl3',
                'hierarchy.lvl4',
                'hierarchy.lvl5',
                'hierarchy.lvl6',
                'content',
                'type',
                'url',
                // Extra
                'productId',
                'productCategoryId',
              ],
              analyticsTags: [facetFilterLanguage, `product:${pageContext.productId}`],
              hitsPerPage: 40,
            }}
            placeholder={search}
            transformItems={(items) => {
              return items.map((item) => {
                // `url` contains the domain
                // but we want to link to the current domain e.g. deploy-preview-1--material-ui.netlify.app
                const parseUrl = document.createElement('a');
                parseUrl.href = item.url;

                const { canonicalAs, canonicalPathname } = pathnameToLanguage(
                  `${parseUrl.pathname}${parseUrl.hash}`,
                );

                return {
                  ...item,
                  pathname: canonicalPathname,
                  as: canonicalAs,
                  userLanguage,
                };
              });
            }}
            hitComponent={DocSearchHit}
            initialScrollY={typeof window !== 'undefined' ? window.scrollY : undefined}
            onClose={onClose}
            navigator={keyboardNavigator}
          />,
          document.body,
        )}
      <GlobalStyles
        styles={(theme) => ({
          html: {
            ':root': {
              '--docsearch-primary-color': (theme.vars || theme).palette.primary[500],
              '--docsearch-text-color': (theme.vars || theme).palette.text.primary,
              '--docsearch-muted-color': (theme.vars || theme).palette.grey[600],
              '--docsearch-searchbox-shadow': 0,
              '--docsearch-hit-shadow': 0,
              '--docsearch-footer-shadow': 0,
              '--docsearch-spacing': theme.spacing(1.5),
              '--docsearch-hit-active-color': (theme.vars || theme).palette.primary[600],
              '--docsearch-logo-color': (theme.vars || theme).palette.grey[600],
              '--docsearch-searchbox-focus-background': 'unset',
              '--docsearch-footer-background': 'unset',
              '--docsearch-modal-background': (theme.vars || theme).palette.background.paper,
            },
          },
          body: {
            '.DocSearch-Container': {
              transition: `opacity ${FADE_DURATION}ms`,
              opacity: 0,
              zIndex: theme.zIndex.tooltip + 100,
              backgroundColor: alpha(theme.palette.grey[600], 0.2),
              backdropFilter: 'blur(4px)',
            },
            '& .DocSearch-StartScreen': {
              display: 'none',
            },
            '& .DocSearch-NewStartScreen': {
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: theme.spacing(2),
              padding: theme.spacing(2, 1),
            },
            '& .DocSearch-NewStartScreenCategory': {
              display: 'flex',
              flexDirection: 'column',
            },
            '& .DocSearch-NewStartScreenTitle': {
              display: 'flex',
              alignItems: 'center',
              padding: theme.spacing(1, 1),
              fontSize: theme.typography.pxToRem(14),
              color: (theme.vars || theme).palette.text.secondary,
            },
            '& .DocSearch-NewStartScreenTitleIcon': {
              color: (theme.vars || theme).palette.primary[500],
              marginRight: theme.spacing(1.5),
              fontSize: theme.typography.pxToRem(16),
            },
            '& .DocSearch-NewStartScreenItem': {
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              width: '100%',
              padding: theme.spacing(0.5, 4.6),
              color: (theme.vars || theme).palette.primary[500],
              fontWeight: 500,
              fontSize: theme.typography.pxToRem(14),
              '&:hover, &:focus': {
                '.DocSearch-NewStartScreenItemIcon': {
                  marginLeft: theme.spacing(1),
                },
              },
            },
            '& .DocSearch-NewStartScreenItemIcon': {
              marginLeft: theme.spacing(0.5),
              transition: 'margin 0.2s',
              fontSize: theme.typography.pxToRem(16),
            },
            '& .DocSearch-Modal': {
              maxWidth: '700px',
              boxShadow: `0px 4px 20px ${alpha(theme.palette.grey[700], 0.2)}`,
              // docsearch.css: <= 750px will be full screen modal
              borderRadius: `clamp(0px, (100vw - 750px) * 9999, ${theme.shape.borderRadius}px)`,
            },
            '& .DocSearch-SearchBar': {
              borderBottom: '1px solid',
              borderColor: (theme.vars || theme).palette.grey[200],
              padding: theme.spacing(1),
            },
            '& .DocSearch-Form': {
              '& .DocSearch-Reset': {
                display: 'none',
              },
              '& .DocSearch-Input': {
                paddingLeft: theme.spacing(2.5),
              },
              '& .DocSearch-Search-Icon': {
                width: '20px',
                height: '20px',
              },
            },
            '& .DocSearch-Cancel': {
              display: 'block',
              alignSelf: 'center',
              cursor: 'pointer',
              height: '1.5rem',
              marginRight: theme.spacing(1),
              padding: theme.spacing(0.3, 0.8, 0.6, 0.8),
              fontSize: 0,
              borderRadius: 5,
              backgroundColor: (theme.vars || theme).palette.grey[50],
              border: '1px solid',
              borderColor: (theme.vars || theme).palette.grey[300],
              '&::before': {
                content: '"esc"',
                fontSize: theme.typography.pxToRem(12),
                letterSpacing: '.08rem',
                fontWeight: 700,
                color: (theme.vars || theme).palette.text.secondary,
              },
            },
            '& .DocSearch-Dropdown': {
              minHeight: 384, // = StartScreen height, to prevent layout shift when first char
              '&::-webkit-scrollbar-thumb': {
                borderColor: (theme.vars || theme).palette.background.paper,
                backgroundColor: (theme.vars || theme).palette.grey[500],
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: (theme.vars || theme).palette.background.paper,
              },
            },
            '& .DocSearch-Dropdown-Container': {
              '& .DocSearch-Hits:first-of-type': {
                '& .DocSearch-Hit-source': {
                  paddingTop: theme.spacing(1),
                },
              },
            },
            '& .DocSearch-Hit-source': {
              top: 'initial',
              paddingTop: theme.spacing(2),
              background: (theme.vars || theme).palette.background.paper,
              fontSize: theme.typography.pxToRem(13),
              fontWeight: 500,
              color: (theme.vars || theme).palette.text.secondary,
            },
            '& .DocSearch-Hit': {
              paddingBottom: 0,
              '&:not(:first-of-type)': {
                marginTop: -1,
              },
            },
            '& .DocSearch-Hit a': {
              backgroundColor: 'transparent',
              padding: theme.spacing(0.25, 0),
              paddingLeft: theme.spacing(2),
              border: '1px solid transparent',
              borderBottomColor: (theme.vars || theme).palette.grey[100],
            },
            '& .DocSearch-Hit-content-wrapper': {
              paddingLeft: theme.spacing(2),
            },
            '& .DocSearch-Hit-title': {
              fontSize: theme.typography.pxToRem(14),
              color: `${theme.palette.text.primary}`,
            },
            '& .DocSearch-Hit-path': {
              fontSize: theme.typography.pxToRem(12),
              color: `${theme.palette.text.secondary}`,
            },
            '& .DocSearch-Hit-Select-Icon': {
              height: '15px',
              width: '15px',
            },
            '& .DocSearch-Hit[aria-selected="true"] a': {
              backgroundColor: (theme.vars || theme).palette.primary[50],
              borderColor: (theme.vars || theme).palette.primary[500],
              borderRadius: theme.shape.borderRadius,
            },
            '& .DocSearch-Hit-action, & .DocSearch-Hits mark': {
              color: (theme.vars || theme).palette.primary[500],
            },
            '& .DocSearch-Footer': {
              borderTop: '1px solid',
              borderColor: (theme.vars || theme).palette.grey[200],
              '& .DocSearch-Commands': {
                display: 'none',
              },
            },
          },
        })}
      />
      <GlobalStyles
        styles={(theme) => [
          {
            [theme.vars ? '[data-mui-color-scheme="dark"]:root' : '.mode-dark']: {
              '--docsearch-primary-color': (theme.vars || theme).palette.primaryDark[300],
              '--docsearch-hit-active-color': (theme.vars || theme).palette.primary[300],
            },
          },
          {
            [theme.vars ? '[data-mui-color-scheme="dark"] body' : '.mode-dark']: {
              '.DocSearch-Container': {
                backgroundColor: alpha(theme.palette.grey[900], 0.7),
              },
              '& .DocSearch-NewStartScreenTitleIcon': {
                color: (theme.vars || theme).palette.primaryDark[300],
              },
              '& .DocSearch-NewStartScreenItem': {
                color: (theme.vars || theme).palette.primaryDark[300],
              },
              '& .DocSearch-Modal': {
                boxShadow: `0px 4px 20px ${alpha(theme.palette.background.paper, 0.7)}`,
                border: '1px solid',
                borderColor: (theme.vars || theme).palette.primaryDark[700],
              },
              '& .DocSearch-SearchBar': {
                borderColor: (theme.vars || theme).palette.primaryDark[700],
              },
              '& .DocSearch-Cancel': {
                backgroundColor: (theme.vars || theme).palette.primaryDark[800],
                borderColor: (theme.vars || theme).palette.primaryDark[600],
              },
              '& .DocSearch-Dropdown': {
                '&::-webkit-scrollbar-thumb': {
                  borderColor: (theme.vars || theme).palette.primaryDark[900],
                  backgroundColor: (theme.vars || theme).palette.primaryDark[700],
                },
              },
              '& .DocSearch-Hit a': {
                borderBottomColor: (theme.vars || theme).palette.primaryDark[700],
              },
              '& .DocSearch-Hit[aria-selected="true"] a': {
                backgroundColor: (theme.vars || theme).palette.primaryDark[800],
                borderColor: (theme.vars || theme).palette.primaryDark[400],
              },
              '& .DocSearch-Hit-action, & .DocSearch-Hits mark': {
                color: (theme.vars || theme).palette.primary[400],
              },
              '& .DocSearch-Footer': {
                borderColor: (theme.vars || theme).palette.primaryDark[700],
              },
            },
          },
        ]}
      />
    </React.Fragment>
  );
}
