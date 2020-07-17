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

describe("parts integration tests", ()=> {
  it("GET /", async ()=>{
    const res = await supertest(server).get("/")
    expect(res.statusCode).toBe(200)
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
    expect(res.body.message).toBe("Welcome to our API")
  })

  it("GET /sections", async () => {
    const res = await supertest(server).get("/sections")
    expect(res.statusCode).toBe(200)
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
    expect(res.body).toHaveLength(10)
    expect(res.body[0].section_no).toBe("2505")
  })

  it("GET /sections/2", async ()=> {
    const res = await supertest(server).get("/sections/2")
    expect(res.statusCode).toBe(200)
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
    expect(res.body.id).toBe(2)
    expect(res.body.section_no).toBe("2550")
    expect(res.body.section_name).toBe("Rear Drive Shaft")
  })

  it("fails to GET section that does not exist", async ()=> {
    const res = await supertest(server).get("/sections/999999999999")
    expect(res.statusCode).toBe(404)
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
    expect(res.body.message).toBe("Section not found.")
  })

  it("POST /sections", async ()=> {
    const res = await supertest(server)
        .post("/sections")
        .send({section_no: 4200, section_name: "Fuel Tank"})
    expect(res.statusCode).toBe(201)
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
    expect(res.body.id).toBeDefined()
    expect(res.body.section_name).toBe("Fuel Tank")
  })

  it("PUT /sections/5", async () => {
    const res = await supertest(server)
      .put("/sections/5")
      .send({section_no: 2710, section_name: "Rear Differentials (Normal Diff)"})
    expect(res.statusCode).toBe(200)
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
    expect(res.body.id).toBe(5)
    expect(res.body.section_name).toBe("Rear Differentials (Normal Diff)")
  })

  it("DELETE /sections/3", async ()=> {
    const res = await supertest(server)
      .delete("/sections/3")
    expect(res.statusCode).toBe(200)
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
    expect(res.body.message).toBe("Section removed.")
  })

  it("GET /parts", async () => {
    const res = await supertest(server).get("/parts")
    expect(res.statusCode).toBe(200)
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
    expect(res.body).toHaveLength(10)
    expect(res.body[0].part_no).toBe("25-100A")
  })

  it("GET /parts/2", async ()=> {
    const res = await supertest(server).get("/parts/2")
    expect(res.statusCode).toBe(200)
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
    expect(res.body.id).toBe(2)
    expect(res.body.part_no).toBe("25-123")
    expect(res.body.part_name).toBe("Bolt")
  })

  it("fails to GET part that does not exist", async ()=> {
    const res = await supertest(server).get("/parts/999999999999")
    expect(res.statusCode).toBe(404)
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
    expect(res.body.message).toBe("Part not found.")
  })

  it("POST /parts", async ()=> {
    const res = await supertest(server)
        .post("/parts")
        .send({part_no: "26-110A", part_name: "Knuckle(R) Rear", quantity: 1, section_id: 3})
    expect(res.statusCode).toBe(201)
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
    expect(res.body.id).toBeDefined()
    expect(res.body.part_name).toBe("Knuckle(R) Rear")
  })

  it("PUT /parts/5", async () => {
    const res = await supertest(server)
      .put("/parts/5")
      .send({ part_no: "25-520B", part_name: "Joint Set(R), Inner", quantity: 2, section_id: 2 })
    expect(res.statusCode).toBe(200)
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
    expect(res.body.id).toBe(5)
    expect(res.body.part_name).toBe("Joint Set(R), Inner")
  })

  it("DELETE /parts/3", async ()=> {
    const res = await supertest(server)
      .delete("/parts/3")
    expect(res.statusCode).toBe(200)
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
    expect(res.body.message).toBe("Part removed.")
  })

  it("GET /sections/2/parts", async()=> {
    const res = await supertest(server).get("/sections/2/parts")
    expect(res.statusCode).toBe(200)
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
    expect(res.body).toHaveLength(7)
    expect(res.body[0].part_name).toBe("Joint Set, Outer")
  })
})
