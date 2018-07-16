1. Обновил CartService для работы с total quantity.

2. Переименовал amount на quantity.

3. Создал LocalStorageService

4. Создал ConfigOptionsService

5. Создал ConstantsService

6. Создал GeneratorService

7. Создал CoreModule и зарегистрировал в нем: LocalStorageService, ConfigOptionsService, ConstantsService, GeneratorService

8. Создал DemoComponent в который внедрил все вышеперечисленные сервисы

9. Создал Click директиву, зарегистрировал в SharedModule, добавил ее на блок информации количества элементов отдельного товара в корзине;
