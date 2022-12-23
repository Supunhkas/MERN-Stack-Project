const router = require("express").Router();
let Student = require("../models/Student");

// making routes for CRUD Operations

///////// CREATE

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const gender = req.body.gender;

  const newStudent = new Student({
    name,
    age,
    gender,
  });

  newStudent
    .save()
    .then(() => {
      res.json("Student Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//////////////Get

router.route("/").get((req, res) => {
  Student.find()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      console.log(err);
    });
});

///////////Update
//////////using Dstructure

router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const { name, age, gender } = req.body;

  const updateStudent = {
    name,
    gender,
  };

  const update = await Student.findByIdAndUpdate(userId, updateStudent)
    .then(() => {
      res.status(200).send({ status: "User Updated", user: update });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error updating data", error: err.message });
    });
});

//////////////Delete

router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await Student.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "User Deleted" });
    })
    .catch(() => {
      console.log(err);
      res.status(500).send({ status: "Error deleteing", error: err.message });
    });
});

/////Ge selected one of database

router.route("/get:id").get(async (req, res) => {
  let userId = req.params.id;
  await Student.findById(userId)
    .then(() => {
      res.status(200).send({ status: "User fetched", user: user });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get user", error: err.message });
    });
});
module.exports = router;
