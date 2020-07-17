exports.seed = function(knex, Promise) {
  return knex('sections').insert([
    { section_no: 2505, section_name: "Rear Propeller Shaft" }, // 1
    { section_no: 2550, section_name: "Rear Drive Shaft" }, // 2
    { section_no: 2600, section_name: "Rear Axle" }, // 3
    { section_no: 2610, section_name: "Rear Brake Mechanisms" }, // 4
    { section_no: 2710, section_name: "Rear Differentials" }, // 5
    { section_no: 2800, section_name: "Rear Suspension Mechanisms" }, // 6
    { section_no: 2801, section_name: "Rear Spring and Damper" }, // 7
    { section_no: 2810, section_name: "Rear Stabilizer" }, // 8
    { section_no: 2830, section_name: "Rear Lower Arms and Sub Frame" }, // 9
    { section_no: 3200, section_name: "Steering Wheel" }, //10
  ]);
};
