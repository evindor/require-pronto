require-pronto
==============

A synchronous AMD (Asynchronous Module Definition) loader.

The loader has two files. One to be used during production, which
assumes the user loads his AMDs manually (usually a single concatenated
and minified script file), and one to be used during development, which
automatically loads AMDs via a document.write mechanism. The
document.write mechanism enables a library to load its own code and be
ready by the time the user attempts to make API calls, in other words,
pronto.

The API is similar to requirejs, but only the following patterns are
supported:

    define(['module-a', 'module-b'], function (A, B) { ... });
    require(['moudle-a', 'module-b'], function (A, B) { ... });

Module functions, after being "define"ed, are stored in
require.defs[moduleName], and can be instantiated either with require(),
but also manually. Module dependencies are likewise stored in
require.deps[moduleName]. Having access to the definition in this way
allows dependency-injection-like patterns to be implemented on top of
this bare-bones library.

For the rationale behind this library, please see the
[blog post](http://aloha-editor.org/blog/2013/04/aloha-and-asynchronous-script-loading/).
Basically, it is supposed to be used by libraries where requirejs may be
inappropriate due to its asynchronous nature.
