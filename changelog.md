1. Создайте или модифицируйте ProductListComponent, который делегирует отображение списка товаров
   компоненту ProductComponent. Товары компоненту предоставить с помощью метода getProducts() сервиса ProductService.
   Создать модель сущности. Использовать одно-два необязательных полей. Интерфейс + Класс. 
   Реализовать возможность добавления товара в корзину (click), если товар есть в наличии (доступен). 
   Товар в корзину должен добавлять ProductListComponent. ProductComponent реализовать как презентационный компонент.
   Если товара нет, кнопку делать недоступной. 
   
2. Создайте или модифицируйте CartListComponent, который отображает список купленных товаров.
Кроме списка купленных товаров, отображать количество купленных товаров и общую сумму.

4. Создайте компонент СartItemComponent, который отображает одну сущность из списка выше. 
   Используйте этот компонент в CartListComponent. 
   Реализовать возможность изменить свойство сущности (quantity), удалить сущность.

5. По возможности использовать декораторы: @Input(), @Output().

6. Использовал OnPush стратегию для компонентов: CartItemComponent, ProductComponent.

7. Использовал ngOnInit и DoCheck хуки в CartComponent.

8. Использовал DOM событие (click) в компонентах: CartItemComponent, ProductComponent

9. Модифицировал сервис (CartService) для предоставления данных компонентам, подсчета количества и суммы.

10. При наведении мышки или клике на пункт списка (CartItem) стилизировать его изменением фона. 
        Создал директиву ItemEffectsDirective и зарегистрировал ее в SharedModule.
        Использовал @HostListener декоратор.

11. Применил директиву ngClass или ngStyle

12. Исправил: https://github.com/ArtemX9/Shop-Angular2-study-project/issues/5 cart.component.html - "Вы специально сделали условие наоборот?
   No items in cart.
   Я очень прошу следовать задания, так как вас много и смотреть код, где кадый что-то придумал, требует большого количества времени, которого у меня не очень много. Спасибо за понимание."

13. Исправил: https://github.com/ArtemX9/Shop-Angular2-study-project/issues/4 ProductModel.ts - "В этом файле очень много всего. Думаю, что лучше создать еще несколько фалов."
14. Исправил: https://github.com/ArtemX9/Shop-Angular2-study-project/issues/3 app.component.html - "<app-cart
                                                                                                    [productsInCart]="productsInCart"
                                                                                                    (onClearCartPress)="handleClearCartPress()"
                                                                                                    (onIncrementAmountPress)="handleIncrementAmountPress($event)"
                                                                                                    (onDecrementAmountPress)="handleDecrementAmountPress($event)"
                                                                                                    >
                                                                                                    Это наверное так в реакте именуются события и методы?
                                                                                                    Пункт 11.2"

15. Исправил: https://github.com/ArtemX9/Shop-Angular2-study-project/issues/2 Корень проекта - "Посмотриет пункт 11.5"

16. Исправил: https://github.com/ArtemX9/Shop-Angular2-study-project/issues/1 cart.service.ts - "У меня проект не запустился.
                                                                                                 Выдает
                                                                                                 ERROR in src/app/cart.service.ts(8,3): error TS2322: Type 'undefined[]' is not assignable to type '[ProductInCart]'.
                                                                                                 Property '0' is missing in type 'undefined[]'.
                                                                                                 src/app/cart.service.ts(41,5): error TS2322: Type 'undefined[]' is not assignable to type '[ProductInCart]'.
                                                                                                 src/app/models/ProductModel.ts(44,3): error TS2392: Multiple constructor implementations are not allowed.
                                                                                                 src/app/models/ProductModel.ts(53,3): error TS2392: Multiple constructor implementations are not allowed.
                                                                                                 src/app/products.service.ts(8,3): error TS2322: Type 'undefined[]' is not assignable to type '[Product]'.
                                                                                                 Property '0' is missing in type 'undefined[]'.
                                                                                                 
                                                                                                 Какой-то странный синтаксис у вас тут
                                                                                                 private productsInCart: [ProductInCart] = [];
                                                                                                 Может вы так хотеле private productsInCart: ProductInCart[] = [];
                                                                                                 Или что-то другое?"
