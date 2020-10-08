import $ from "jquery"
/*var $ = requier("jquery");*/
import "./css/style.css"
import "./css/style.less"
import "./css/style.scss"
class Person{
    static info = {name:"tom",age:30 }
}
console.log(Person.info)


$(function () {
 $("li:odd").css("backgroundColor","#3c3c3c")
    $("li:even").css("backgroundColor","#e4e4e4")
})

