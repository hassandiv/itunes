describe('Visit Home URL', () => {
    it('should go to home page', () => {
        cy.visit('/')
    })
    describe('Open Drawer', () => {
        it('should click on button to open drawer', () => {
            cy.get('[data-cy=menu-btn]').click()
        })
    })
})
describe('Check Search Form', () => {
    describe('Check First Radio Button', () => {
        it('should check the first radio button - song', () => {
            //cy.get('[data-cy=song-radio-btn]').click()
            cy.get('[type="radio"]').first().check()
        })
    })
    describe('Click on search input', () => {
        it('should click on search input and type/search for hello', () => {
            //cy.get('[data-cy=search-input]').click().clear()
            cy.get('[type="search"]').click().type('Hello')
            //cy.get('[data-cy=infinite-scroll-list]').scrollTo('bottom')
            cy.get('#test').scrollTo(0, 11500)//.scrollIntoView({ offset: { top: 950, left: 0 } })

        })
    })
    describe('Check Second Radio Button', () => {
        it('should check the second radio button - artist', () => {
            cy.get('[type="radio"]').check('musicArtist')
        })
    })
    describe('Click on search input', () => {
        it('should click on search input and type/search for michael jackson', () => {
            cy.get('[type="search"]').click().type('michael jackson')
        })
    })
    describe('Check Third Radio Button', () => {
        it('should check the third radio button - album', () => {
            cy.get('[type="radio"]').check('album')
        })
    })
})