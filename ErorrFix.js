let account = {
    accountNumber: "123456",
    owner:'Moe',
    balance: 5000,
    transactions : [1000, 500,2000],

    deposit: function (amount)
    {
        this.balance = this.balance + amount;
        console.log(`Amount of R${amount} is successfully deposited\nNew balance: R${this.balance}`);

    },

    withdraw: function (amount)
    {
        if (amount <= this.balance)
        {
            this.balance = this.balance - amount;
            console.log(`Amount of R${amount} is successfully withdrawn\nNew balance: R${this.balance}`);

        }
        else{
            console.log('Insufficient funds')
        }
    },

    showBalance: function ()
    {
        console.log(`Balance is  R${this.balance}`);
    }

}


account.deposit(account.transactions[0])
account.withdraw(account.transactions[1])
account.showBalance()