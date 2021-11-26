#ifndef BUILDING_NODE_EXTENSION
#define BUILDING_NODE_EXTENSION
#include "js_native_api.h"
#include "js_native_api_types.h"
#endif

#define if_unmet_throw(call, env, thrower, error)                              \
  if (!(call)) {                                                               \
    thrower(env, NULL, error);                                                 \
    return NULL;                                                               \
  }

#include <assert.h>
#include <node_api.h>
#include <stdio.h>
#include <stdlib.h>

static napi_value Hello(napi_env env, napi_callback_info info) {
  napi_status status;

  char* name = (char*)malloc(6 * sizeof(char));
  sprintf(name, "World");
  name[5] = '\0';

  size_t name_size = 1024;
  size_t copied = 5;

  size_t argc = 1;
  napi_value argv[1];
  status = napi_get_cb_info(env, info, &argc, argv, NULL, NULL);
  if_unmet_throw(status == napi_ok,
                 env,
                 napi_throw_type_error,
                 "Unable to read arguments");
  if_unmet_throw(argc <= 1, env, napi_throw_type_error, "Too many arguments");

  if (argc == 1) {
    napi_valuetype valuetype;
    status = napi_typeof(env, argv[0], &valuetype);
    if_unmet_throw(status == napi_ok,
                   env,
                   napi_throw_type_error,
                   "Unable to get argument type");
    if_unmet_throw(valuetype == napi_string,
                   env,
                   napi_throw_type_error,
                   "Invalid argument type; expecting string");

    status = napi_get_value_string_utf8(env, argv[0], name, name_size, &copied);
    if_unmet_throw(status == napi_ok,
                   env,
                   napi_throw_type_error,
                   "Could not copy argument value");
  }

  // Hello + ' ' + $name + ! + \0
  size_t result_size = 5 + 1 + copied + 1 + 1;
  char* result = (char*)malloc(result_size * sizeof(char));

  snprintf(result, result_size, "Hello %s!", name);
  result[result_size] = '\0';

  // printf("my string is: [%s]", result);

  napi_value napi_result;
  // status = napi_create_string_utf8(env, result, result_size - 1,
  // &napi_result);
  status = napi_create_string_utf8(env, result, NAPI_AUTO_LENGTH, &napi_result);
  if_unmet_throw(status == napi_ok,
                 env,
                 napi_throw_type_error,
                 "Error composing result string");

  return napi_result;
}

#define DECLARE_NAPI_METHOD(name, func)                                        \
  { name, 0, func, 0, 0, 0, napi_default, 0 }

static napi_value Init(napi_env env, napi_value exports) {
  napi_status status;
  napi_property_descriptor desc = DECLARE_NAPI_METHOD("hello", Hello);
  status = napi_define_properties(env, exports, 1, &desc);
  assert(status == napi_ok);
  return exports;
}

NAPI_MODULE(hello, Init)
