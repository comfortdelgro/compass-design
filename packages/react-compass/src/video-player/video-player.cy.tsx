import VideoPlayer from './index'

const src = 'http://techslides.com/demos/sample-videos/small.webm'

describe('video-player.cy.ts', () => {
  it('C01: Should render children', () => {
    const videoPlayer = <VideoPlayer src={src} id='video' />

    cy.mount(videoPlayer)

    cy.get('#video').should('be.visible')
  })
})
