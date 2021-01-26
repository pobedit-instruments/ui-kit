enum Product {
    NAME = 'pushkin'
}

enum Env {
    PRODUCTION = 'production'
}

// Указание на проблемные места без раскрытия информации посторонним лицам
// @todo сделать привязку значений к временной метке
enum Errors {
    /*
     Используется не оптимизированная сборка
     См. https://github.com/ant-design/babel-plugin-import
    */
    NON_OPTIMIZED_BUILD = 0
}

export {
    Env,
    Errors,
    Product
};
