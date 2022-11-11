// autotest for method https://swapi.dev/api/people/10


pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});

pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([200]);
});

pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("name");
});




//autotest for method https://api.hh.ru/employers?text=яндекс+практикум

pm.test("Мой первый автотест", function () {
    pm.response.to.have.status(200);
});

pm.test("Body matches string Яндекс.Практикум", function () {
    pm.expect(pm.response.text()).to.include("Яндекс.Практикум");
});

pm.test("Response time is less than 50ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(50);
});

