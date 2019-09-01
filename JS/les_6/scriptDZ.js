/**Спробуйте зробити таксопарк, який ви робили на одній з попередніх завдань. Але тепер шоб всі машинки були замкнуті. Тобто ззовні ви не могли їх отримати. І всі дії,я кі ви робили до того з машинками (збільшувати потужність і т.д.) зробитина методах, які ми вчора розглянули.
 Зробит метод збільшення потужності. Метод відправки водія на курси. Метод оновлення водіїв (приймаючи масив водіїв). Та змінити водія конкретній машинці. Отрмати всіх водіїв. Отримати всі авто. Отрмати конкретного водія. Отримати конкретне авто. Отримати ціну всіх авто. */


function taxoPark() {
    let cars = [
        {
            model: 'Seat Arona',
            enginePowerHP: 115,
            owner:
                {
                    name: 'Yaroslav',
                    age: 25,
                    expYears: 2
                },
            price: 35000,
            year: '2018'
        },
        {
            model: 'Skoda Fabia',
            enginePowerHP: 80,
            owner:
                {
                    name: 'Oleksandr',
                    age: 25,
                    expYears: 2
                },
            price: 5000,
            year: '2008'
        },
        {
            model: 'Fiat Doblo',
            enginePowerHP: 95,
            owner:
                {
                    name: 'Oleg',
                    age: 25,
                    expYears: 6
                }
            ,
            price: 6500,
            year: '2007'
        },
        {
            model: 'Ford Transit',
            enginePowerHP: 90,
            owner:
                {
                    name: 'Nazar',
                    age: 26,
                    expYears: 4
                },
            price: 2000,
            year: '2000'
        },
        {
            model: 'Mercedes E225',
            enginePowerHP: 170,
            owner:
                {
                    name: 'Oleksiy',
                    age: 21,
                    expYears: 2
                },
            price: 3500,
            year: '2000'
        },
        {
            model: 'Lada 21011',
            enginePowerHP: 80,
            owner:
                {
                    name: 'Yan',
                    age: 24,
                    expYears: 5
                },
            price: 1500,
            year: '1976'
        },
        {
            model: 'Seat Leon',
            enginePowerHP: 230,
            owner:
                {
                    name: 'Bogdan',
                    age: 31,
                    expYears: 4
                },
            price: 8000,
            year: '2008'
        },
        {
            model: 'Honda Civic',
            enginePowerHP: 300,
            owner:
                {
                    name: 'Artur',
                    age: 24,
                    expYears: 6
                },
            price: 10000,
            year: '2010'
        },
        {
            model: 'Hyndai Sonata',
            enginePowerHP: 130,
            owner:
                {
                    name: 'Sergiy',
                    age: 47,
                    expYears: 23
                },
            price: 8000,
            year: '2009'
        },
        {
            model: 'Mersedes W140',
            enginePowerHP: 250,
            owner:
                {
                    name: 'Taras',
                    age: 35,
                    expYears: 12
                },
            price: 10000,
            year: '1995'
        },
    ];

    let newOwners = [
        {name: 'Yan', age: 28, expYears: 15},
        {name: 'Igor', age: 73, expYears: 7},
        {name: 'Ira', age: 24, expYears: 5},
        {name: 'Ivan', age: 36, expYears: 9},
        {name: 'Viktor', age: 24, expYears: 4},
        {name: 'Vova', age: 85, expYears: 5},
        {name: 'Dima', age: 24, expYears: 5},
        {name: 'Nastya', age: 15, expYears: 2},
        {name: 'Petro', age: 24, expYears: 5},
        {name: 'Karina', age: 18, expYears: 3}
    ];

    return {

        upPriceAndHP: () => {
            for (i = 0; i < cars.length; i += 2) {
                cars[i].enginePowerHP += cars[i].enginePowerHP * 0.1;
                cars[i].price += cars[i].price * 0.05
            }
        },


        newDrevers: () => {
            for (i = 0, j = 0; i < cars.length, j < newOwners.length; i += 2, j++) {
                cars[i].owner = newOwners[j]
            }
        },


        upEXP: () => {
            cars.map(car => {
                if (car.owner.expYears < 5 && car.owner.age > 25) {
                    car.owner.expYears++
                }

            });
        },

        sumPrice: () => {
            let price = cars.reduce(function (prevVal, curVal) {
                return prevVal + curVal.price

            }, 0);

            console.log(price);
        },

        getCars: () => {
            console.log(cars);
        },


    }
}

let see = taxoPark();

see.sumPrice();





