enum Structure {
    DESIGN_SYSTEM = 'Дизайн-система',
    COMPONENTS = 'Компоненты'
}

enum DesignSystem {
    OVERVIEW = 'Обзор системы',
    COMPONENTS = 'Компоненты',
    PATTERNS = 'Паттерны взаимодействия',
    STYLISTICS = 'Стилистика'
}

enum Stylistics {
    COLORS = 'Цвета',
    FONTS = 'Шрифты',
    ICONS = 'Иконки',
    LAYOUT = 'Сетка',
    THEME = 'Темизация'
}

enum Patterns {
    ACCESSIBILITY = 'Доступность',
    ALIGNMENT = 'Выравнивание',
    BUTTONS = 'Работа с кнопками',
    CONTRAST = 'Контрастность',
    COMPACTNESS = 'Компактность',
    COPYWRITING = 'Копирайтинг',
    FORMATTING = 'Формат данных',
    GROUPING = 'Группировка содержимого',
    INDICATORS = 'Индикаторы выполнения',
    REPETITION = 'Повторение',
    TRANSITION = 'Анимационные переходы'
}

enum Component {
    BASIC_ELEMENTS = 'Базовые элементы',
    LAYOUT = 'Расположение',
    CONTENT = 'Наполнение',
    INDICATORS = 'Индикаторы',
    NAVIGATION = 'Навигация',
    INFORMERS = 'Информеры',
    OTHER = 'Разное',
    WIDGETS = 'Виджеты'
}

enum BasicElement {
    TYPOGRAPHY = 'Типографика',
    ICON = 'Иконка',
    BUTTON = 'Кнопка',
    RADIO = 'Радиокнопка',
    CHECKBOX = 'Чекбокс',
    SWITCH = 'Переключатель',
    TEXT_FIELD = 'Поле ввода',
    SELECT = 'Выпадающий список',
    SLIDER = 'Слайдер'
}

enum TextField {
    TEXT = 'Текстовое поле',
    AUTOCOMPLETE = 'Автодополнение',
    DATE_PICKER = 'Выбор даты',
    TIME_PICKER = 'Выбор времени'
}

enum Layout {
    GRID = 'Сетка',
    LAYOUT = 'Макет',
    DIVIDER = 'Контентный разделитель',
    SPACE = 'Пространственный разделитель'
}

enum Content {
    TABLE = 'Таблица',
    LIST = 'Список',
    CARD = 'Карточка',
    COUPON = 'Купон',
    ACCORDION = 'Схлопывающийся список',
    PANEL = 'Выдвижная панель',
    MODAL = 'Модальное окно'
}

enum Indicator {
    PROGRESS = 'Индикатор прогресса',
    EMPTY = 'Отсутствие данных',
    SKELETON = 'Скелетон',
    SPINNER = 'Спиннер',
    PULSAR = 'Пульсар',
    TIMELINE = 'Новостная лента'
}

enum Informers {
    NOTIFICATION = 'Оповещение',
    TOOLTIP = 'Тултип',
    POPOVER = 'Контентная подсказка',
    BADGE = 'Бейдж',
    TAG = 'Тэг'
}

enum Navigation {
    BREADCRUMBS = 'Навигационная цепочка',
    PAGINATION = 'Нумерация страниц',
    STEPS = 'Шаги',
    MENU = 'Навигационное меню',
    DROPDOWN = 'Выпадающее меню',
    TABS = 'Вкладки'
}

enum Other {
    AVATAR = 'Аватар',
    AFFIX = 'Зацепка',
    FILE_UPLOADER = 'Загрузчик файлов',
    FORM = 'Управление формами'
}

enum Widget {
    CALENDAR = 'Календарь',
    BACK_TOP = 'Наверх',
    IMAGE_PREVIEW = 'Просмотр изображений'
}

const DELIMITER = '/';

const getStoryTitle = (elements: string[]): string => {
    return elements.join(DELIMITER);
};

export {
    Structure,
    DesignSystem,
    Component,
    BasicElement,
    Layout,
    Content,
    Indicator,
    TextField,
    Informers,
    Navigation,
    Patterns,
    Stylistics,
    Other,
    Widget,
    getStoryTitle
};
