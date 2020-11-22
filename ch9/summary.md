# CSS-DOM
本章讲了如何通过js来影响css进而改变样式
### style
每个element node都有一个style对象，  
可以通过style对象的属性来改变样式。  
这些属性和css属性对应，但由于连字符不能包含于js变量名,  
所以这些属性名是用驼峰法写出的，如elem.style.fontWeight。  
### css-dom
当需要通过行为改变样式时，往往我们既可以通过js实现，  
也可以通过css实现。  
比如通过悬停事件改变样式，我们可以用css中的hover，  
也可以用js设置onmouseover的事件处理器。  
面对这种情况，我们可以走最简单的道路，  
哪种方法容易实现就用哪种方法。