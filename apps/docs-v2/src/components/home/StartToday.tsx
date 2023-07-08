import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import GetStartedButtons from 'docs/src/components/home/GetStartedButtons'
import GradientText from 'docs/src/components/typography/GradientText'
import SectionHeadline from 'docs/src/components/typography/SectionHeadline'

export default function StartToday() {
  return (
    <Grid container spacing={{xs: 5, md: 4}} alignItems='center'>
      <Grid item xs={12} sm={12} md={12}>
        <SectionHeadline
          overline='Start now'
          title={
            <Typography variant='h2'>
              Ship your next project <GradientText>faster</GradientText>
            </Typography>
          }
          description="Find out why MUI's tools are trusted by thousands of open-source developers and teams around the world."
        />
        <GetStartedButtons />
      </Grid>
    </Grid>
  )
}
