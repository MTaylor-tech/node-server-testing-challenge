const supertest = require("supertest")
const server = require("../index")
const db = require("../data/config")

beforeEach(async ()=> {
  await db.seed.run()
})

afterAll(async ()=> {
  await db.seed.run()
  await db.destroy()
})

describe("simple basic test", ()=> {
  it("placeholder test", ()=> {
    expect(2+2).toBe(4)
  })
})

describe("hobbits integration tests", ()=> {
  it("GET /", async ()=>{
    const res = await supertest(server).get("/")
    expect(res.statusCode).toBe(200)
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
    expect(res.body.message).toBe("Welcome to our API")
  })

  // it("GET /hobbits", async () => {
  //   const res = await supertest(server).get("/hobbits")
  //   expect(res.statusCode).toBe(200)
  //   expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
  //   expect(res.body).toHaveLength(4)
  //   expect(res.body[0].name).toBe("sam")
  // })
  //
  // it("GET /hobbits/2", async ()=> {
  //   const res = await supertest(server).get("/hobbits/2")
  //   expect(res.statusCode).toBe(200)
  //   expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
  //   expect(res.body.id).toBe(2)
  //   expect(res.body.name).toBe("frodo")
  // })
  //
  // it("fails to GET hobbit that does not exist", async ()=> {
  //   const res = await supertest(server).get("/hobbits/999999999999")
  //   expect(res.statusCode).toBe(404)
  //   expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
  //   expect(res.body.message).toBe("Hobbit not found.")
  // })
  //
  // it("POST /hobbits", async ()=> {
  //   const res = await supertest(server)
  //       .post("/hobbits")
  //       .send({name: "smeagol"})
  //   expect(res.statusCode).toBe(201)
  //   expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
  //   expect(res.body.id).toBeDefined()
  //   expect(res.body.name).toBe("smeagol")
  // })
})
