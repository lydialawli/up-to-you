export default class QuoteFactory {
    getRandomQuote(){
        var Quotes = ["Lower the cost of failure","Everything is difficult until you know how to do it",
    "wanting to be someone else is a waste of who you are"]
    
        var randomNumber = Quotes[Math.floor(Math.random()*Quotes.length)]

        return Quotes[randomNumber]
      }
}
  