1. Архитектура - FSD:

- app - корень приложения, провайдеры, роутинг и тому подобное;
- shared - переиспользумая часть приложения, базовые UI компоненты (инпуты, кнопки, иконки), хуки кастомные, глобальные типы;
- pages - уже собранные страницы без какой-то дополнительной логики;
- features - можно сделать добавление в избранное, поиск персонажа, модальные окна;
- entities - сущности, например, сущность персонажа;
- widgets;

- src/
  - app/
    - App.tsx, main.tsx, store.tsx.
  - entities/
    - character/
      - model/
        - useGetOneCharacter.ts
        - useGetAllCharacters.ts
      - ui/
        - CharacterCard.tsx
        - CharacterCard.module.css
      - lib/
        - constants.ts
        - types.ts
  - features/
    - favorites/
      - model/
        - useToggleFavorite.ts
      - ui/
      - lib/
        - constants.ts
        - types.ts
    - search-filter/
  - pages/
    - characters-page;
    - favorites-page;
    - character-page
  - shared/
    - button/
      - ui/
      - lib/
      - model/
    - icons/
    - input/

2. App.tsx:

- Можно вынести роутинг в константу и мапить ее.
- Сделать Header отдельным компонентом.
- Выносить значения в переменные, чтобы их проще и безопаснее было переиспользовать.

3. main.tsx:

- Сделать отдельный Providers компонент, который будет держать в себе все провайдеры и принимать children, использовать его вместо использования всех провайдеров на месте.

3. functions/characters/model/types.ts:

- Не делаем все типы в одном месте, перекладываем их в нужные папки (допустим ICharacter должен будет лежать в entities/lib/types.ts).

4. functions/favorites/ui/FavoritesButton/favoriteSlice.tsx:

- Вынести в отдельный слой features/favorites/model.
- Сделать отдельную переменную с ключом, который используешь.

5. functions/favorites/ui/FavoritesButton/index.tsx:

- Вынести в нужный слой.

6. functions/filters:

- Вынести в нужный слой (features/search-filter).

7. functions/ui/CharacterCard:

- Вынести в нужный слой (сама карточка в entities/character/ui).

8. pages/allCharACter:

- Выносим ключ для react-query в отдельную переменную.
- Отдельно указывать staleTime в данном кейсе нет смысла.
- Сделать проверки на isLoading и isError внутри верстки, а не снаружи как условия для рендера.
- Пути в переменных.

9. pages/favorites:

- Учесть те же правки, что на прошлой странице.
- Сделать запрос `Get multiple characters` вместо запроса всех персонажей и их фильтрации по ID.

10. apiRequestRickAndMorty.ts:

- Сделать свой axios instance с базовой конфигурацией.
- После этого можно будет использовать его вместо глобального объекта axios и не дублировать использование BASE_URL.
- Запросы можно вынести в entities/character/model.

11. Вынести BASE_URL в .env файл и использовать через него.

12. queryClient.ts:

- Перенести в нужный слой.

13. Попробовать поменять версии React на 18 вместо 19.

14. Выпилить лишние библиотеки из зависимостей в package.json (dependencies).

15. Посмотреть и попробовать настроить в приложении prettier конфиг.

16. Посмотреть тесты с Vitest библиотекой, для общего понимания написать пару тестов на компоненты/функции и позапускать их.
