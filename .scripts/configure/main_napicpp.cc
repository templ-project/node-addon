#ifndef BUILDING_NODE_EXTENSION
#define BUILDING_NODE_EXTENSION
#endif

#define if_unmet_throw(call, thrower, error)                                   \
  if (!(call)) {                                                               \
    thrower::New(env, error).ThrowAsJavaScriptException();                     \
  }

#include <napi.h>
#include "../lib/reverse.hpp"

Napi::String Hello(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();

  std::string result = "Hello ";

  if (info.Length() < 1) {
    result += "World";
  } else {
    if_unmet_throw(info[0].IsString(),
                   Napi::TypeError,
                   "Invalid argument type; expecting string")

        result += info[0].As<Napi::String>().Utf8Value();
  }

  result += "!";

  return Napi::String::New(env, result);
}

Napi::String Olleh(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();

  std::string result = "Hello ";

  if (info.Length() < 1) {
    result += "World";
  } else {
    if_unmet_throw(info[0].IsString(),
                   Napi::TypeError,
                   "Invalid argument type; expecting string")

        result += info[0].As<Napi::String>().Utf8Value();
  }

  result += "!";

  std::string tluser = xx_reverse(result);

  return Napi::String::New(env, tluser);
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "hello"), Napi::Function::New(env, Hello));

  exports.Set(Napi::String::New(env, "olleh"), Napi::Function::New(env, Olleh));

  return exports;
}

NODE_API_MODULE(hello, Init)
