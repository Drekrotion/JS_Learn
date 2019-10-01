
db.students.find().pretty()


db.students.find({"avgScore" : 4.2}).pretty()

db.students.find({"class" : 1}).pretty()

db.students.find({"lessons" : "physics"}).pretty()


db.students.find({"parents.profession" : "scientist"}).pretty()

db.students.find({"avgScore" : {$gte: 4}}).pretty()

db.students.find().sort({avgScore: -1}).limit(1).pretty()










