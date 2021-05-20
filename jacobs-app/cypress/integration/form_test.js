// - [ ]  Get the `Name` input and type a name in it.
// - [ ]  Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
// - [ ]  Get the `Email` input and type an email address in it
// - [ ] Get the `password` input and type a password in it
// - [ ]  Set up a test that will check to see if a user can check the terms of service box
// - [ ] Check to see if a user can submit the form data
// - [ ] Check for form validation if an input is left empty

describe('StyledFriend', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234')
    })

    const textInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[type=email]')
    const termsOfSvc = () => cy.get('input[name=termsOfService]')
    const submitBtn = () => cy.get('button[id=submitBtn')

    describe('Filling out the inputs and cancelling', () => {
        it('can navigate to the site', () => {
            cy.url().should('include', 'localhost')
        })

        it('submit button starts out disabled', () => {
            submitBtn().should('be.disabled')
        })

        it('can type in the inputs', () => {
            textInput()
                .should('have.value', '')
                .type('Be nice to the CSS expert')
                .should('have.value', 'Be nice to the CSS expert')
            emailInput()
                .should('have.value', '')
                .type('jacob@gmail.com')
                .should('have.value', 'jacob@gmail.com')
        })

        it('the submit button enables when both inputs are filled out', () => {
            emailInput().type('jacob@gmail.com')
            textInput().type('Have fun!')
            submitBtn().should('not.be.disabled')
        })

    })

})