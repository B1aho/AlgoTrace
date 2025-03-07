/**
 * Инструментировать код:
Используя парсеры (например, Babel) для анализа AST, можно вставлять вызовы (например, recordState()) в ключевых 
местах (условия, циклы, операции сравнения) для отслеживания состояния выполнения. Это позволит "вырезать" 
моменты, которые будут потом использоваться для визуализации.
Да, с помощью Babel можно создать плагин, который будет проходить по AST и вставлять дополнительные вызовы в 
местах присваивания или изменения переменных. 
Это требует написания собственного плагина Babel, который корректно обработает все варианты присваивания 
(например, сложные деструктуризации или вложенные выражения).
Не всегда просто учесть все нюансы языка, поэтому могут понадобиться дополнительные настройки или ограничения 
на поддерживаемый синтаксис.
Такой подход хорош для образовательных песочниц, где можно ограничить синтаксис и функциональность кода
 пользователя, чтобы инструментирование было проще.

Ограничить функционал:
Заставить пользователя писать код в ограниченном подмножестве JavaScript, чтобы легче было предсказать, 
где можно вставить точки останова и как фиксировать изменения. Таким образом, песочница будет работать только 
с определённым синтаксисом или шаблонами, а не с произвольным кодом.

Использовать мини-интерпретатор:
Реализовать небольшую систему, которая будет выполнять пользовательский код в безопасном окружении 
(например, с помощью Web Workers) и одновременно собирать нужные данные для визуализации. При этом можно 
перехватывать вызовы функций, операции и изменения переменных.
 */