


function userCard(num) {

    let options = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: num
    };


    return {
        getCardOptions: function () {
            console.log(options);
        },

        putCredits: function (cache) {
            options.balance += cache
        },

        takeCredits: function (takeCache) {
            if(options.balance + options.transactionLimit < takeCache) {
                throw new Error('No Money!')
            }
            options.balance -= takeCache
        },

        setTransactionLimit: function (upTransactionLimit) {
            options.transactionLimit = upTransactionLimit
        },

        transferCredits: function (creditMoney, anotherCard) {
            anotherCard.putCredits(creditMoney);
            options.balance -= (creditMoney + (creditMoney * 0.05))

        }



    }


}

const card1 = userCard(1);

card1.getCardOptions();

card1.putCredits(150);

card1.getCardOptions();

card1.takeCredits(100);

card1.getCardOptions();

card1.setTransactionLimit(5000);

card1.getCardOptions();


console.log('_____________________________');


const card2 = userCard(2);

card2.getCardOptions();

card1.transferCredits(50, card2);

console.log('_____________________________');


card1.getCardOptions();

console.log('_____________________________');


card2.getCardOptions();





