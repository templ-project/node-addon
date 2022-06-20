{
  "targets": [
    {
      "target_name": "main",
      "sources": [
        "lib/reverse.cpp",
        "src/main.cc"
      ],
      "link_settings": {},
      "include_dirs": [
        "<!@(node -p \"require('node-addon-api').include\")"
      ],
      'defines': ['NAPI_DISABLE_CPP_EXCEPTIONS'],
      "cflags_cc": [
        "-std=c++17"
      ],
      "cflags_cc!": [
        "-std=gnu++1y", # comes from node 12+
        "-std=gnu++17"  # comes from node 16+ with NAN
      ]
    }
  ]
}