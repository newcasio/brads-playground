const login = {
  email: "braddong38@gmail.com",
  password: "mudshovel1",
  incorrectPassword: "mudshovel",
  username: "Brad"
};

const ad = {
  title: "Chromag Mountain bike",
  price: 3300,
  phone: "0433222112",
  description: "Awesome Chromag Rootdown."
};

describe("Gumtee testing", () => {
  beforeEach(() => {
    cy.window().then(win => {
      win.sessionStorage.clear();
    });
    cy.clearCookies();
    cy.visit("http://www.gumtree.com.au");
    cy.get(`[data-hc="1=c?lmth.sda-ym-m/"]`).click();
    cy.get('[data-hc="lmth.nigol-t/"]').click({ force: true });

    cy.get(`input[name=loginMail]`, { timeout: 60000 }).type(login.email);
  });

  it("should login into the website successfully with correct credentials", () => {
    cy.get(`input[id=login-password]`).type(login.password);
    cy.get(`button[id=btn-submit-login]`).click();
    cy.get(`[data-hc="1=c?lmth.sda-ym-m/"]`, { timeout: 60000 }).should(
      "contain",
      login.username
    );
  });

  it("should show error if incorrect password entered", () => {
    cy.get(`input[id=login-password]`).type(login.incorrectPassword);
    cy.get(`button[id=btn-submit-login]`).click();
    cy.url().should("include", "t-login.html");

    //Alt test for login failure

    //     cy.get("div.notification--error", { timeout: 60000 }).should(
    //       "contain",
    //       "Sorry"
    //     );
  });

  it("should post an add correctly", () => {
    cy.get(`input[id=login-password]`).type(login.password);
    cy.get(`button[id=btn-submit-login]`).click();
    cy.get(`[data-hc="1=c?lmth.sda-ym-m/"]`, { timeout: 60000 }).should(
      "contain",
      login.username
    );
    cy.get(`[data-hc='lmth.da-tsop-p/']`, { timeout: 60000 })
      .click({
        multiple: true,
        force: true
      })
      .url()
      .should("contain", "p-post-ad.html");
    cy.get("input#title", { timeout: 60000 })
      .click()
      .type(ad.title);
    cy.get(`button.category-suggestion__title-button`).click();
    cy.get("li[data-index=0]", { timeout: 60000 }).click();
    cy.get("input#pstad-price", { timeout: 60000 })
      .click()
      .type(ad.price);
    cy.get(`select`, { timeout: 60000 })
      .eq(0)
      .select("bmx")
      .should("have.value", "bmx");
    cy.get(`select`, { timeout: 60000 })
      .eq(1)
      .select("trek")
      .should("have.value", "trek");
    cy.get(`select`, { timeout: 60000 })
      .eq(4)
      .select("23")
      .should("have.value", "23");
    cy.get("textarea#pstad-descrptn")
      .click()
      .type(ad.description);
    cy.get("button#pstad-frmprview").click();
    cy.get("button#prview-btn-save", { timeout: 60000 }).click();
    cy.get(".notification__message", { timeout: 60000 }).should(
      "contain",
      "Congratulations, your ad has been created!"
    );
  });
});
