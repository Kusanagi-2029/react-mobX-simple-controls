# Описание

- [Описание проекта](#описание-проекта)
- [Технологический стек](#технологический-стек)
  - [Установка и запуск](#установка-и-запуск)
  - [Скрипты](#скрипты)
  - [DEMO](#demo)
    - [Видео](#видео)
    - [Скриншоты](#скриншоты)
  - [Пояснения](#пояснения)
    - [Store](#store)
    - [Hooks](#hooks)
    - [Utils Helpers](#utils-helpers)
- [Архитектура проекта](#архитектура-проекта)
  - [Структура директорий](#структура-директорий)
  - [Модульная архитектура](#модульная-архитектура)
  - [Container-presenter pattern](#container-presenter-pattern)

# Описание проекта

Разработаны два компонента-контрола.

## Контрол с кнопками

Текстовый контрол, который позволяет настраивать и выводить разное кол-во кнопок слева и справа от самого контрола. Для кнопок есть возможность настроить `текст` и `колбек функцию`, которая вызывается при нажатии на кнопку - через Props.

В основном компоненте приложения присутствуют два контрола для тестирования:

```
Контрол с 2 кнопками справа;
- При нажатии на первую кнопку очищается содерживое в контроле;
- При нажатии на вторую кнопку текст в контроле меняется на 'Hello world!';
```

```
Контрол с 1 кнопкой справа и 1 кнопкой слева;
- При нажатии на кнопку справа вызывается alert с текстом в контроле;
- При нажатии на кнопку слева проверяем, что в контроле введено число, и если это так, то выводим число через alert;
```

## Контрол-автокомплит

Текстовый контрол, который позволяет выводить подсказки при наборе текста. Подсказки выводятся под контролом в виде выпадающего списка. В подсказках должно выводиться `наименование`, `полное наименование` и `флаг`. При выборе подсказки, значение из неё проставляется в контрол.

Для получения подсказок в тестовом проекте есть асинхронная функция, имитирующая API - `apiService/getCountryByName`. Подсказки могут дублироваться, и ответ от api сервиса может быть разным - это учтено и обработаны дубликаты через структуру Set в отдельном хэлпере `getUniqueSuggestions`.

Контрол имеет настройку максимального кол-ва выводимых подсказок.

В основном компоненте приложения сделаны два контрола для тестирования:

```
Максимальное кол-во подсказок - 3
```

```
Максимальное кол-во подсказок - 10
```

## Технологический стек:

- использовано минимум сторонних библиотек и зависимостей,
- использован [MobX](https://mobx.js.org/),
- использован MVVM0подход при реализации контролов:
  - .json-данные из Api = `Model`
  - .tsx-файлы = `View`
  - MobX-store'ы = `ViewModel`,
- переиспользованы общие части контролов, как внутри модулей каждого из контролов, так и в shared: ui (input-поле, навигационные кнопки, заголовок), хуки (один, для определения мобильного или десктоп-устройства - `useDeviceDetect`), интерфейсы и т.п.
- для стилизации использован чистый css, подключаемый в качестве модулей к tsx-файлам,
> [!TIP]
> Всё responsive и адаптировано под **мобильные/вертикальные** экраны

## Установка и запуск

Вам понадобится:
1) **Node.js:**
- https://nodejs.org/en
2) **Yarn:**
- https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable
или
`npm install --global yarn`

3) Откройте проект и установите зависимости. Запустите приложение:
```bash
yarn install
yarn start
```
Приложение запустится на [http://localhost:3000](http://localhost:3000)

## Скрипты

### `yarn install`

Установка зависимостей:
```bash
yarn install
```

### `yarn start`

```bash
yarn start
```

Приложение запустится на [http://localhost:3000](http://localhost:3000)

### `yarn build`

Запуск локального сервера для запуска билда:
```bash
yarn add -g serve
```

Запуск самого процесса билда:
```bash
yarn build
serve -s build
```

Билд запустится на [http://localhost:3000](http://localhost:3000)

### `yarn test`

Запуск тестов приложения

### `yarn eject`

> [!CAUTION]
> Это неотвратимая операция `eject`!

## DEMO

### Видео

Видео с демо функционала работающего приложения (с условием изолированности логики и вёрстки):
Доступ по ссылке:
- [https://youtu.be/NtdkXLZBUVA](https://youtu.be/wPfKFoOb6PI)

### Скриншоты

**Desktop**

**Вертикальная ориентация**

![Скрин 1](https://github.com/user-attachments/assets/8a976bf0-c23d-4ef4-a885-010ee557d81e)

**Горизонтальная ориентация**

![Скрин 2](https://github.com/user-attachments/assets/4d93996f-c8a3-4b2a-888b-609fafa31485)

**Mobile**

**Вертикальная ориентация**

![Скрин 4 1 - Мобильная ориентация](https://github.com/user-attachments/assets/67102b95-5d90-4c16-b4e1-7ff9216f4613) 
![Скрин 4 2 - Мобильная ориентация](https://github.com/user-attachments/assets/dd6d5cab-9ca6-4f6b-b82f-36ac132f8be4)


**Горизонтальная ориентация**

![Скрин 4 3 - Мобильная ориентация](https://github.com/user-attachments/assets/5faf1610-1193-4086-9a50-2da711d70122)

Убраны дубликаты данных - кейс "Австралия":
![Скрин 3 - Дубликаты](https://github.com/user-attachments/assets/f0b9643d-7495-43cb-b6d8-c15282ec4baf)

## Пояснения
### Store
Введены два mobX-стора для каждого из контролов:
1) `autoCompleteControlStore.ts`:
```tsx
import {
  action,
  makeAutoObservable,
  observable,
  runInAction,
} from 'mobx';
import { getCountryByName } from '../api/apiService';
import { ICountry } from '../_types/interfaces';

class AutoCompleteControlStore {
  @observable
  inputValue: string = '';

  @observable
  suggestions: ICountry[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action
  setInputValue(value: string) {
    this.inputValue = value;
    this.fetchSuggestions();
  }

  async fetchSuggestions() {
    if (this.inputValue) {
      const suggestions = await getCountryByName(this.inputValue);
      runInAction(() => {
        this.setSuggestions(suggestions);
      });
    } else {
      runInAction(() => {
        this.setSuggestions([]);
      });
    }
  }

  @action
  setSuggestions(suggestions: ICountry[]) {
    this.suggestions = suggestions;
  }
}

const autoCompleteControlStore = new AutoCompleteControlStore();
export default autoCompleteControlStore;

```

2) `buttonControlStore.ts`:
```tsx
import { action, makeAutoObservable, observable } from 'mobx';

class ButtonControlStore {
  @observable
  inputValue: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  @action
  setInputValue(value: string) {
    this.inputValue = value;
  }

  @action
  clearInput() {
    this.inputValue = '';
  }

  @action
  setHelloWorld() {
    this.inputValue = 'Hello world!';
  }
}

const buttonControlStore = new ButtonControlStore();
export default buttonControlStore;
```
> [!TIP]
> Декораторы, а также методы при работе с со стейтом типа `runInAction` были использованы для более корректной работы реактивности MobX и лучшей читаемости.

### Hooks
У приложения есть общий хук для определения типа устройства/экрана - `useDeviceDetect`:
```ts
import { useEffect, useState } from 'react';

/**
 * Хук для определения типа устройства (мобильное/десктоп)
 */
const useDeviceDetect = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(
        userAgent,
      );
    const mobile = isMobileDevice || window.innerWidth < 840; // Определяем мобильное устройство по ширине экрана и user agent
    setIsMobile(mobile);
  };

  useEffect(() => {
    handleResize(); // Проверяем при первом рендере
    window.addEventListener('resize', handleResize); // Добавляем обработчик события изменения размера окна

    return () => {
      window.removeEventListener('resize', handleResize); // Убираем обработчик при размонтировании
    };
  }, []);

  return isMobile;
};

export default useDeviceDetect;
```

### Utils Helpers
Также есть общий утил-хэлпер - Debounce-функция `debounce`
```ts
export function debounce<T>(
  func: (arg: T) => void,
  delay: number | undefined,
): (arg: T) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function (arg: T): void {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func(arg);
    }, delay);
  };
}
```
Debounce-функция использует дженерики именно для того, чтобы использоваться, например, в связке с input-полями разных типов и при этом избегать отключения тайп-чекинга с any - сохранять строгость типизации, но при этом и гибкость.

Пример использования в приложении:
```tsx
  const debouncedOnChange = useCallback(
    debounce((newValue: string) => {
      onChange(newValue);
    }, debounceTime),
    [onChange, debounceTime],
  );

// Используется в:

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (isDebounced) {
      debouncedOnChange(newValue);
    } else {
      onChange(newValue);
    }
```

Также есть helper-функция `getUniqueSuggestions` для избавления от дубликатов. Т.к. формат данных массив объектов - не можем не воспользоваться структурой "ключ-значение" Set, в которой значения и являются ключами, т.е. уникальными:
```ts
import { ICountry } from '../_types/interfaces';

export const getUniqueSuggestions = (
  suggestions: ICountry[],
): string[] => {
  return [...new Set(suggestions.map(country => country.name))];
};
```

Пример использования в приложении:
```tsx
//...
const uniqueSuggestions = getUniqueSuggestions(
    autoCompleteControlStore.suggestions,
  )
//...
```
Как видно, helper всего лишь возвращает массив уникальных имён стран из массива объектов `suggestions`. Это сделано, чтобы получать список стран без повторений.

1. `suggestions.map(country => country.name)`
Для каждого объекта `country` в массиве `suggestions` извлекается значение свойства `name`. В результате получается массив имён стран.

2. `new Set(...)`
Переданный массив имён стран будет обработан Set, все дубликаты будут исключены. Например, специально был модифицирован mock-массив, добавлены дубликаты для "Австралия", в результирующем наборе будет только одно "Австралия" благодаря Set.

![image](https://github.com/user-attachments/assets/58c586d9-bf3e-485e-a3d6-fddae81e1fe3)

3. `[...new Set(...)]`
Spread-оператор `...` используется для преобразования объекта `Set` обратно в массив.

## Архитектура проекта

### Структура директорий
Структура директорий проекта:

![image](https://github.com/user-attachments/assets/622e01c4-07b3-45c3-b684-5765fc03ed2a)

![image](https://github.com/user-attachments/assets/3c763800-486d-44b2-b207-a46e67215643)

### Модульная архитектура

Была выбрана модульная архитектура, чтобы инкапсулировать и изолировать логику работы компонентов каждого из контролов, при этом сгруппировав их по функциональности.
Итого 2 модуля:
- AutoCompleteControlWrapper
- ButtonControlWrapper

Именно они и являют собой 2 контрола со своими компонентами, стилями, Api/Сервисами (только у AutoCompleteControlWrapper), хэлперами и т.п.

#### Аргументация:
- [Feature-Sliced Design (FSD)](https://feature-sliced.design/docs/get-started/overview) - избыточен для данного проекта, т.к. не подразумевает ни масштабов, ни командной разработки, ни проработки бизнес-уровней,
- **Безархитектурный подход** допустим, но с ним со временем тяжело соблюдать управление **Coupling** - **Cohesion** между компонентами.

При **модульной архитектуре**:
1. **Функциональная модульность**: Код разбивается на модули, где каждый модуль представляет собой независимую функциональность. Это позволяет легче поддерживать и расширять функционал приложения.
2. **Изоляция компонентов**: Компоненты и функции, относящиеся к определенной функциональной области, сгруппированы вместе. Это помогает избежать путаницы между различными частями кода.
   - **Пример** - Осуществляется инкапсуляция модуля через **`index.ts`** - **_PUBLIC API_**:
       - Внешнее приложение знает о модуле только то, что ему надо знать, принимает только то, что стоит принимать. Не мутирует данные и не имеет к ним доступа извне модуля.
       - Модуль легче тестировать и изменять, а также другие модули легче внедрять в проект/удалять из проекта.
3. **Масштабируемость**: Упрощает добавление нового функционала, так как новые функции добавляются в отдельные модули, не затрагивая существующие.
4. **Упрощенное тестирование**: Модули можно тестировать отдельно, что делает процесс тестирования более управляемым и эффективным.

#### Преимущества подхода

- **Четкая структура**: Позволяет легко ориентироваться в коде и быстро находить нужные компоненты и модули.
- **Модульность**: Облегчает масштабирование и добавление новых функций.
- **Упрощенное тестирование и поддержка**: Каждый модуль можно тестировать и поддерживать отдельно от других.

### Container-presenter pattern
1) Пример - компонент **ButtonControlContainer (Container)** - имеет свою определённую логику и управляет доступом к глобальному хранилищу с state'ом, состоит из компонентов, вынесенных в отдельные файлы (в данном случае одного) для лучшего разделения логики и UI.
Таким образом, компонент **ButtonControlContainer** разделяет логику взаимодействия с хранилищем и UI-часть, делегируя её подробную часть другому компоненту: **ButtonControl**:
```tsx
//...
const ButtonControlContainer: React.FC<IButtonControlContainerProps> =
  observer(({ buttons }) => {
    const handleButtonClick = (actionType: string) => {
      switch (actionType) {
        case 'clear':
          buttonControlStore.clearInput();
          break;
        case 'helloWorld':
          buttonControlStore.setInputValue('Hello world!');
          break;
        case 'checkNumber':
          const number = parseFloat(buttonControlStore.inputValue);
          if (!isNaN(number)) alert(`Число: ${number}`);
          break;
        case 'showAlert':
          alert(buttonControlStore.inputValue);
          break;
        default:
          break;
      }
    };

    const handleInputChange = (value: string) => {
      buttonControlStore.setInputValue(value);
    };

    return (
      <ButtonControl
        buttons={buttons}
        inputValue={buttonControlStore.inputValue}
        onInputChange={handleInputChange}
        onButtonClick={handleButtonClick}
        isDebounced={false}
      />
    );
  });
//...
```
2) В свою очередь, компонент **ButtonControl (presenter)** принимает данные от **ButtonControlContainer (Container)** через пропсы и возвращает блок из элементов и общего переиспользуемого UI-компонента **DebouncedInput**:
```tsx
//...
      <DebouncedInput
        value={inputValue}
        onChange={onInputChange}
        isDebounced={isDebounced}
        debounceTime={debounceTime}
      />
//...
```
3) Самый общий shared UI-компонент input-поля представлен в виде атомарного(неделимого) компонента, который, в свою очередь, является **(presenter)** для компонента **ButtonControl**, выступающим в качестве **Container** относительно данного **DebouncedInput**, принимающим значения и функцию в виде пропсов:
```tsx
//...
const DebouncedInput: React.FC<IDebouncedInputProps> = ({
  value,
  onChange,
  isDebounced,
  debounceTime,
})
//...
  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      className={
        isMobile ? styles.debouncedInputMobile : styles.debouncedInput
      }
    />
  );
```

Таким образом, понижается **Coupling (зацепление, зависимость одних модулей/компонент/функций/т.п. от других)** и повышается **Cohesion (связанность, способность модулей/компонент/функций/т.п. выполнять одну и ту же задачу/функцию)**.

_P.s. Стараются понижать **Coupling** и повышать **Cohesion**._

![image](https://github.com/user-attachments/assets/5bd87fb3-be35-4311-abb3-faf79d47194a)

> [!TIP]
> Этот подход обеспечивает хорошую организацию и гибкость для масштабирования проекта, делая его более устойчивым к изменениям и лёгким для поддержки.

