


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
            options.balance += cache;

            histori('putCredits', cache)
        },

        takeCredits: function (takeCache) {
            if(options.balance < takeCache && options.transactionLimit < takeCache) {
                throw new Error('No Money!')
            }
            options.balance -= takeCache;

            histori('takeCredits',takeCache)
        },

        setTransactionLimit: function (upTransactionLimit) {
            options.transactionLimit = upTransactionLimit
        },

        transferCredits: function (creditMoney, anotherCard) {
            if (options.balance < (creditMoney + (creditMoney * 0.05))){
                throw new Error('No Money!')
            }

            anotherCard.putCredits(creditMoney);
            options.balance -= (creditMoney + (creditMoney * 0.05))
        }
    };


    function histori(nameTranzikshen, value) {
        let historiObj = {
            data: new Date().toISOString(),
            oprationType: nameTranzikshen,
            credits: value
        };
        options.historyLogs.push(historiObj);
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


console.log('___________________________________________________________________________________');


const card2 = userCard(2);

card1.getCardOptions();
card2.getCardOptions();

console.log('___________________________________________________________________________________');

card1.transferCredits(50, card2);

card1.getCardOptions();
card2.getCardOptions();




