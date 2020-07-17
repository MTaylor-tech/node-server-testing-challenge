exports.seed = function(knex, Promise) {
  return knex('parts').insert([
    { part_no: "25-100A", part_name: "Shaft, Propeller", quantity: 1, section_id: 1 }, // 1
    { part_no: "25-123", part_name: "Bolt", quantity: 4, section_id: 1 }, // 2
    { part_no: "25-125", part_name: "Nut", quantity: 4, section_id: 1 }, // 3
    { part_no: "25-510B", part_name: "Joint Set, Outer", quantity: 2, section_id: 2 }, // 4
    { part_no: "25-520B", part_name: "Join Set(R), Inner", quantity: 2, section_id: 2 }, // 5
    { part_no: "25-530", part_name: "Boot Set, Outer Joint", quantity: 2, section_id: 2 }, // 6
    { part_no: "25-540", part_name: "Boot Set, Inner Joint", quantity: 2, section_id: 2 }, // 7
    { part_no: "25-550A", part_name: "Clip Set, Drive Shaft", quantity: 2, section_id: 2 }, // 8
    { part_no: "25-124", part_name: "Nut", quantity: 8, section_id: 2 }, // 9
    { part_no: "25-500", part_name: "Shaft, Drive", quantity: 2, section_id: 2 }, //10
  ]);
};
