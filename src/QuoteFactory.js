export default class QuoteFactory
{
    static getRandomQuote(){
        let myQuotes = [
            "\"Lower the cost of failure\"",
            "\"Everything is difficult\nuntil you know how to do it\"",
            "\"wanting to be someone else\nis a waste of who you are\"",
            "\"currency of the New Rich: time and mobility\"",
            "\"There is no such thing as failure,\njust lessons to be learnt on the way\"",
            "\"Every great developer you know got there\nby solving problems they were unqualified to solve until they actually did it\"",
            "\"There is only one person who could ever make you happy,\nand that person is you\"",
            "\"Ask how something can be done\nrather than saying that\nit can't be done\"",
            "\"Continuous improvement is better than delayed perfection\"",
            "\"One's destination is never a place\nbut rather a new way of looking at things\"",
            "\"Other people's opinion of you\n does not have to become your reality\"",
            "\"There are seven days in the week\nand\nsomeday isn't one of them\"",
            "\"Strength does not come from winning.\nYour struggles is what develops your strengths\"",
            "\"Do not let what you cannot do\ninterfere with\nwhat you can do\"",
            "\"Whenever you find yourself on the side of the majority,\nit is time to pause and reflect\""]
    
        let randomNumber = Math.floor(Math.random()*myQuotes.length)

        return myQuotes[randomNumber]

      }
}
  