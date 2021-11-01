{
  "targets": [
    {
      "target_name": "main",
      "sources": [
        "src/main.cc"
      ],
      "link_settings": {},
      "include_dirs": [
      ],
      "cflags_cc": [
      ],
      "cflags_cc!": [
        "-std=gnu++1y", # comes from node 12+
        "-std=gnu++17"  # comes from node 16+ with NAN
      ]
    }
  ]
}
