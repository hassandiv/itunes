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
        it('should click on search input and type/search for Wild Thoughts', () => {
            //cy.get('[data-cy=search-input]').click().clear()
            cy.get('[type="search"]').click().type('Wild Thoughts').wait(6000)
            cy.get('#infinite-scroll-list').scrollTo(0, 100000, { duration: 5000 })
            cy.get('[type="search"]').click().clear()
        })
    })
    describe('Check Second Radio Button', () => {
        it('should check the second radio button - artist', () => {
            cy.get('[type="radio"]').check('musicArtist')
        })
    })
    describe('Click on search input', () => {
        it('should click on search input and type/search for Rihanna', () => {
            //cy.get('[data-cy=search-input]').click().clear()
            cy.get('[type="search"]').click().type('Rihanna').wait(6000)
            cy.get('#infinite-scroll-list').scrollTo(0, 100000, { duration: 5000 })
            cy.get('[type="search"]').click().clear()
        })
    })
    describe('Check Third Radio Button', () => {
        it('should check the third radio button - album', () => {
            cy.get('[type="radio"]').check('album')
        })
    })
    describe('Click on search input', () => {
        it('should click on search input and type/search for Grateful', () => {
            cy.get('[type="search"]').click().type('Grateful').wait(6000)
            cy.get('#infinite-scroll-list').scrollTo(0, 100000, { duration: 5000 })
            cy.get('[type="search"]').click().clear()
        })
    })
    describe('Click on search input', () => {
        it('should click on search input and type/search for something not found', () => {
            cy.get('[type="search"]').click().type('hello120,.jagrsehhd').wait(7000)
            //cy.get('#infinite-scroll-list').scrollTo(0, 100000, { duration: 5000 })
            cy.get('[type="search"]').click().clear()
        })
    })
    describe('Close Drawer', () => {
        it('should click on button to close drawer', () => {
            cy.get('[data-cy=menu-btn]').click()
        })
    })
})