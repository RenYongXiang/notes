// docs/.vuepress/config.ts
import { defineConfig4CustomTheme } from "vuepress/config";
import dayjs from "dayjs";
var config_default = defineConfig4CustomTheme({
  theme: "vdoing",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "\u4EFB\u6C38\u7FD4\u7684\u4E2A\u4EBA\u7B14\u8BB0",
      description: "web\u524D\u7AEF\u6280\u672F\u535A\u5BA2,\u4E13\u6CE8web\u524D\u7AEF\u5B66\u4E60\u4E0E\u603B\u7ED3\u3002JavaScript,js,ES6,TypeScript,vue,React,python,css3,html5,Node,git,github\u7B49\u6280\u672F\u6587\u7AE0\u3002"
    }
  },
  themeConfig: {
    nav: [
      { text: "\u9996\u9875", link: "/" },
      {
        text: "\u7F16\u7A0B",
        link: "/programming/",
        items: [
          {
            text: "Java\u6587\u7AE0",
            link: "/pages/830609/"
          },
          {
            text: "\u5B66\u4E60\u7B14\u8BB0"
          }
        ]
      },
      {
        text: "\u6570\u5B66",
        link: "/math/",
        items: [
          { text: "\u521D\u4E2D\u6570\u5B66" },
          { text: "\u9AD8\u4E2D\u6570\u5B66" },
          { text: "\u5927\u5B66\u6570\u636E" },
          { text: "\u4E13\u5347\u672C\u6570\u5B66" }
        ]
      },
      {
        text: "\u82F1\u8BED",
        link: "/english/",
        items: [
          { text: "\u5355\u8BCD" },
          { text: "\u8BED\u6CD5" }
        ]
      },
      {
        text: "\u4E13\u5347\u672C",
        link: "/zhuanshengben/",
        items: [
          { text: "\u5B66\u4E60\u8BA1\u5212" },
          { text: "\u8D44\u6599\u6C47\u603B" },
          { text: "\u5B66\u4E60\u65B9\u6CD5" }
        ]
      },
      {
        text: "\u5927\u5B66\u751F\u6D3B",
        link: "/life/",
        items: [
          { text: "\u5B66\u4E60", link: "/pages/f2a556/" },
          { text: "\u9762\u8BD5", link: "/pages/aea6571b7a8bae86/" },
          { text: "\u5FC3\u60C5\u6742\u8D27", link: "/pages/2d615df9a36a98ed/" },
          { text: "\u5B9E\u7528\u6280\u5DE7", link: "/pages/baaa02/" },
          { text: "\u53CB\u60C5\u94FE\u63A5", link: "/friends" }
        ]
      },
      {
        text: "\u6536\u85CF",
        link: "/pages/beb6c0bd8a66cea6/",
        items: [
          { text: "\u7F51\u7AD9", link: "/pages/beb6c0bd8a66cea6/" },
          { text: "\u8D44\u6E90", link: "/pages/eee83a9211a70f9d/" },
          { text: "Vue\u8D44\u6E90", link: "/pages/12df8ace52d493f6/" }
        ]
      },
      {
        text: "\u7D22\u5F15",
        link: "/archives/",
        items: [
          { text: "\u5206\u7C7B", link: "/categories/" },
          { text: "\u6807\u7B7E", link: "/tags/" },
          { text: "\u5F52\u6863", link: "/archives/" }
        ]
      }
    ],
    sidebarDepth: 2,
    logo: "/img/logo.png",
    searchMaxSuggestions: 10,
    lastUpdated: "\u4E0A\u6B21\u66F4\u65B0",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "\u7F16\u8F91",
    sidebar: "structuring",
    author: {
      name: "RenYongXiang",
      link: "https://github.com/RenYongXiang"
    },
    blogger: {
      avatar: "/img/headerImg.jpg",
      name: "RenYongXiang",
      slogan: "\u5927\u4E8C\u65B0\u751F"
    },
    footer: {
      createYear: 2024,
      copyrightInfo: "RenYongXiang | MIT License"
    },
    social: {
      icons: [
        {
          iconClass: "icon-youjian",
          title: "\u53D1\u90AE\u4EF6",
          link: "mailto:2073741645@qq.com"
        },
        {
          iconClass: "icon-github",
          title: "GitHub",
          link: "https://github.com/RenYongXiang"
        },
        {
          iconClass: "icon-erji",
          title: "\u542C\u97F3\u4E50",
          link: "http://163cn.tv/wNXdu2c"
        }
      ]
    },
    extendFrontmatter: {
      author: {
        name: "RenYongXiang",
        link: "https://github.com/RenYongXiang"
      }
    }
  },
  head: [
    ["link", { rel: "icon", href: "/img/favicon.ico" }],
    [
      "meta",
      {
        name: "keywords",
        content: "\u524D\u7AEF\u535A\u5BA2,\u4E2A\u4EBA\u6280\u672F\u535A\u5BA2,\u524D\u7AEF,\u524D\u7AEF\u5F00\u53D1,\u524D\u7AEF\u6846\u67B6,web\u524D\u7AEF,\u524D\u7AEF\u9762\u8BD5\u9898,\u6280\u672F\u6587\u6863,\u5B66\u4E60,\u9762\u8BD5,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown"
      }
    ],
    ["meta", { name: "theme-color", content: "#11a8cd" }]
  ],
  plugins: [
    [
      "thirdparty-search",
      {
        thirdparty: [
          {
            title: "\u5728MDN\u4E2D\u641C\u7D22",
            frontUrl: "https://developer.mozilla.org/zh-CN/search?q=",
            behindUrl: ""
          },
          {
            title: "\u5728Runoob\u4E2D\u641C\u7D22",
            frontUrl: "https://www.runoob.com/?s="
          },
          {
            title: "\u5728Vue API\u4E2D\u641C\u7D22",
            frontUrl: "https://cn.vuejs.org/v2/api/#"
          },
          {
            title: "\u5728Bing\u4E2D\u641C\u7D22",
            frontUrl: "https://cn.bing.com/search?q="
          }
        ]
      }
    ],
    [
      "one-click-copy",
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
        copyMessage: "\u590D\u5236\u6210\u529F",
        duration: 1e3,
        showInMobile: false
      }
    ],
    [
      "demo-block",
      {
        settings: {
          jsfiddle: false,
          codepen: true,
          horizontal: false
        }
      }
    ],
    [
      "vuepress-plugin-zooming",
      {
        selector: ".theme-vdoing-content img:not(.no-zoom)",
        options: {
          bgColor: "rgba(0,0,0,0.6)"
        }
      }
    ],
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
        }
      }
    ],
    ["@vuepress-reco/vuepress-plugin-kan-ban-niang", {
      theme: ["miku"],
      clean: true,
      width: 210,
      height: 308
    }],
    [
      "cursor-effects",
      {
        size: 4,
        shape: "star",
        zIndex: 999999999
      }
    ]
  ],
  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"]
  },
  extraWatchFiles: [
    ".vuepress/config.ts"
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcclxuICogXHU2M0QwXHU3OTNBXHVGRjFBXHU1OTgyXHU2MEE4XHU2MEYzXHU0RjdGXHU3NTI4SlNcdTcyNDhcdTY3MkNcdTc2ODRcdTkxNERcdTdGNkVcdTY1ODdcdTRFRjZcdTUzRUZcdTUzQzJcdTgwMDNcdUZGMUFodHRwczovL2dpdGh1Yi5jb20veHVnYW95aS92dWVwcmVzcy10aGVtZS12ZG9pbmcvdHJlZS9hMmYwM2U5OTNkZDJmMmEzYWZkYzU3Y2Y3MmFkZmM2ZjFiNmIwYzMyL2RvY3MvLnZ1ZXByZXNzXHJcbiAqL1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnNEN1c3RvbVRoZW1lLCBVc2VyUGx1Z2lucyB9IGZyb20gJ3Z1ZXByZXNzL2NvbmZpZydcclxuaW1wb3J0IHsgVmRvaW5nVGhlbWVDb25maWcgfSBmcm9tICd2dWVwcmVzcy10aGVtZS12ZG9pbmcvdHlwZXMnXHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZzRDdXN0b21UaGVtZTxWZG9pbmdUaGVtZUNvbmZpZz4oe1xyXG4gIHRoZW1lOiAndmRvaW5nJywgLy8gXHU0RjdGXHU3NTI4bnBtXHU0RTNCXHU5ODk4XHU1MzA1XHJcbiAgLy8gdGhlbWU6IHJlc29sdmUoXCJEOlxcXFxub3Rlc1xcXFxub3Rlc1xcXFxub3Rlc1xcXFxkb2NzXFxcXC52dWVwcmVzc1wiLCAnLi4vLi4vdmRvaW5nJyksIC8vIFx1NEY3Rlx1NzUyOFx1NjcyQ1x1NTczMFx1NEUzQlx1OTg5OFx1NTMwNVxyXG5cclxuICBsb2NhbGVzOiB7XHJcbiAgICAnLyc6IHtcclxuICAgICAgbGFuZzogJ3poLUNOJyxcclxuICAgICAgdGl0bGU6IFwiXHU0RUZCXHU2QzM4XHU3RkQ0XHU3Njg0XHU0RTJBXHU0RUJBXHU3QjE0XHU4QkIwXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnd2ViXHU1MjREXHU3QUVGXHU2MjgwXHU2NzJGXHU1MzVBXHU1QkEyLFx1NEUxM1x1NkNFOHdlYlx1NTI0RFx1N0FFRlx1NUI2Nlx1NEU2MFx1NEUwRVx1NjAzQlx1N0VEM1x1MzAwMkphdmFTY3JpcHQsanMsRVM2LFR5cGVTY3JpcHQsdnVlLFJlYWN0LHB5dGhvbixjc3MzLGh0bWw1LE5vZGUsZ2l0LGdpdGh1Ylx1N0I0OVx1NjI4MFx1NjcyRlx1NjU4N1x1N0FFMFx1MzAwMicsXHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBiYXNlOiAnLycsIC8vIFx1OUVEOFx1OEJBNCcvJ1x1MzAwMlx1NTk4Mlx1Njc5Q1x1NEY2MFx1NjBGM1x1NUMwNlx1NEY2MFx1NzY4NFx1N0Y1MVx1N0FEOVx1OTBFOFx1N0Y3Mlx1NTIzMFx1NTk4MiBodHRwczovL2Zvby5naXRodWIuaW8vYmFyL1x1RkYwQ1x1OTBBM1x1NEU0OCBiYXNlIFx1NUU5NFx1OEJFNVx1ODhBQlx1OEJCRVx1N0Y2RVx1NjIxMCBcIi9iYXIvXCIsXHVGRjA4XHU1NDI2XHU1MjE5XHU5ODc1XHU5NzYyXHU1QzA2XHU1OTMxXHU1M0JCXHU2ODM3XHU1RjBGXHU3QjQ5XHU2NTg3XHU0RUY2XHVGRjA5XHJcblxyXG4gIC8vIFx1NEUzQlx1OTg5OFx1OTE0RFx1N0Y2RVxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICAvLyBcdTVCRkNcdTgyMkFcdTkxNERcdTdGNkVcclxuICAgIG5hdjogW1xyXG4gICAgICB7IHRleHQ6ICdcdTk5OTZcdTk4NzUnLCBsaW5rOiAnLycgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdcdTdGMTZcdTdBMEInLFxyXG4gICAgICAgIGxpbms6ICcvcHJvZ3JhbW1pbmcvJywgLy9cdTc2RUVcdTVGNTVcdTk4NzVcdTk0RkVcdTYzQTVcdUZGMENcdTZCNjRcdTU5MDRsaW5rXHU2NjJGdmRvaW5nXHU0RTNCXHU5ODk4XHU2NUIwXHU1ODlFXHU3Njg0XHU5MTREXHU3RjZFXHU5ODc5XHVGRjBDXHU2NzA5XHU0RThDXHU3RUE3XHU1QkZDXHU4MjJBXHU2NUY2XHVGRjBDXHU1M0VGXHU0RUU1XHU3MEI5XHU1MUZCXHU0RTAwXHU3RUE3XHU1QkZDXHU4MjJBXHU4REYzXHU1MjMwXHU3NkVFXHU1RjU1XHU5ODc1XHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIC8vIFx1OEJGNFx1NjYwRVx1RkYxQVx1NEVFNVx1NEUwQlx1NjI0MFx1NjcwOWxpbmtcdTc2ODRcdTUwM0NcdTUzRUFcdTY2MkZcdTU3MjhcdTc2RjhcdTVFOTRtZFx1NjU4N1x1NEVGNlx1NTkzNFx1OTBFOFx1NUI5QVx1NEU0OVx1NzY4NFx1NkMzOFx1NEU0NVx1OTRGRVx1NjNBNVx1RkYwOFx1NEUwRFx1NjYyRlx1NEVDMFx1NEU0OFx1NzI3OVx1NkI4QVx1N0YxNlx1NzgwMVx1RkYwOVx1MzAwMlx1NTNFNlx1NTkxNlx1RkYwQ1x1NkNFOFx1NjEwRlx1N0VEM1x1NUMzRVx1NjYyRlx1NjcwOVx1NjU5Q1x1Njc2MFx1NzY4NFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnSmF2YVx1NjU4N1x1N0FFMCcsXHJcbiAgICAgICAgICAgIGxpbms6ICcvcGFnZXMvODMwNjA5LydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdcdTVCNjZcdTRFNjBcdTdCMTRcdThCQjAnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnXHU2NTcwXHU1QjY2JyxcclxuICAgICAgICBsaW5rOiAnL21hdGgvJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1MjFEXHU0RTJEXHU2NTcwXHU1QjY2JyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU5QUQ4XHU0RTJEXHU2NTcwXHU1QjY2JyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1OTI3XHU1QjY2XHU2NTcwXHU2MzZFJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU0RTEzXHU1MzQ3XHU2NzJDXHU2NTcwXHU1QjY2JyB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnXHU4MkYxXHU4QkVEJyxcclxuICAgICAgICBsaW5rOiAnL2VuZ2xpc2gvJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1MzU1XHU4QkNEJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU4QkVEXHU2Q0Q1JyB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnXHU0RTEzXHU1MzQ3XHU2NzJDJyxcclxuICAgICAgICBsaW5rOiAnL3podWFuc2hlbmdiZW4vJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1QjY2XHU0RTYwXHU4QkExXHU1MjEyJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU4RDQ0XHU2NTk5XHU2QzQ3XHU2MDNCJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1QjY2XHU0RTYwXHU2NUI5XHU2Q0Q1JyB9XHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdcdTU5MjdcdTVCNjZcdTc1MUZcdTZEM0InLFxyXG4gICAgICAgIGxpbms6ICcvbGlmZS8nLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTVCNjZcdTRFNjAnLCBsaW5rOiAnL3BhZ2VzL2YyYTU1Ni8nIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTk3NjJcdThCRDUnLCBsaW5rOiAnL3BhZ2VzL2FlYTY1NzFiN2E4YmFlODYvJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1RkMzXHU2MEM1XHU2NzQyXHU4RDI3JywgbGluazogJy9wYWdlcy8yZDYxNWRmOWEzNmE5OGVkLycgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ1x1NUI5RVx1NzUyOFx1NjI4MFx1NURFNycsIGxpbms6ICcvcGFnZXMvYmFhYTAyLycgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ1x1NTNDQlx1NjBDNVx1OTRGRVx1NjNBNScsIGxpbms6ICcvZnJpZW5kcycgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnXHU2NTM2XHU4NUNGJyxcclxuICAgICAgICBsaW5rOiAnL3BhZ2VzL2JlYjZjMGJkOGE2NmNlYTYvJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU3RjUxXHU3QUQ5JywgbGluazogJy9wYWdlcy9iZWI2YzBiZDhhNjZjZWE2LycgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ1x1OEQ0NFx1NkU5MCcsIGxpbms6ICcvcGFnZXMvZWVlODNhOTIxMWE3MGY5ZC8nIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdWdWVcdThENDRcdTZFOTAnLCBsaW5rOiAnL3BhZ2VzLzEyZGY4YWNlNTJkNDkzZjYvJyB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnXHU3RDIyXHU1RjE1JyxcclxuICAgICAgICBsaW5rOiAnL2FyY2hpdmVzLycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgdGV4dDogJ1x1NTIwNlx1N0M3QicsIGxpbms6ICcvY2F0ZWdvcmllcy8nIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTY4MDdcdTdCN0UnLCBsaW5rOiAnL3RhZ3MvJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1RjUyXHU2ODYzJywgbGluazogJy9hcmNoaXZlcy8nIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBzaWRlYmFyRGVwdGg6IDIsIC8vIFx1NEZBN1x1OEZCOVx1NjgwRlx1NjYzRVx1NzkzQVx1NkRGMVx1NUVBNlx1RkYwQ1x1OUVEOFx1OEJBNDFcdUZGMENcdTY3MDBcdTU5MjcyXHVGRjA4XHU2NjNFXHU3OTNBXHU1MjMwaDNcdTY4MDdcdTk4OThcdUZGMDlcclxuICAgIGxvZ286ICcvaW1nL2xvZ28ucG5nJywgLy8gXHU1QkZDXHU4MjJBXHU2ODBGbG9nb1xyXG4gICAgLy8gcmVwbzogJ3h1Z2FveWkvdnVlcHJlc3MtdGhlbWUtdmRvaW5nJywgLy8gXHU1QkZDXHU4MjJBXHU2ODBGXHU1M0YzXHU0RkE3XHU3NTFGXHU2MjEwR2l0aHViXHU5NEZFXHU2M0E1XHJcbiAgICBzZWFyY2hNYXhTdWdnZXN0aW9uczogMTAsIC8vIFx1NjQxQ1x1N0QyMlx1N0VEM1x1Njc5Q1x1NjYzRVx1NzkzQVx1NjcwMFx1NTkyN1x1NjU3MFxyXG4gICAgbGFzdFVwZGF0ZWQ6ICdcdTRFMEFcdTZCMjFcdTY2RjRcdTY1QjAnLCAvLyBcdTVGMDBcdTU0MkZcdTY2RjRcdTY1QjBcdTY1RjZcdTk1RjRcdUZGMENcdTVFNzZcdTkxNERcdTdGNkVcdTUyNERcdTdGMDBcdTY1ODdcdTVCNTcgICBzdHJpbmcgfCBib29sZWFuIChcdTUzRDZcdTUwM0NcdTRFM0FnaXRcdTYzRDBcdTRFQTRcdTY1RjZcdTk1RjQpXHJcbiAgICBkb2NzRGlyOiAnZG9jcycsIC8vIFx1N0YxNlx1OEY5MVx1NzY4NFx1NjU4N1x1NEVGNlx1NTkzOVxyXG4gICAgLy8gZG9jc0JyYW5jaDogJ21hc3RlcicsIC8vIFx1N0YxNlx1OEY5MVx1NzY4NFx1NjU4N1x1NEVGNlx1NjI0MFx1NTcyOFx1NTIwNlx1NjUyRlx1RkYwQ1x1OUVEOFx1OEJBNG1hc3Rlclx1MzAwMiBcdTZDRThcdTYxMEZcdUZGMUFcdTU5ODJcdTY3OUNcdTRGNjBcdTc2ODRcdTUyMDZcdTY1MkZcdTY2MkZtYWluXHU1MjE5XHU0RkVFXHU2NTM5XHU0RTNBbWFpblxyXG4gICAgZWRpdExpbmtzOiB0cnVlLCAvLyBcdTU0MkZcdTc1MjhcdTdGMTZcdThGOTFcclxuICAgIGVkaXRMaW5rVGV4dDogJ1x1N0YxNlx1OEY5MScsXHJcbiAgICAvLyoqKiBcdTRFRTVcdTRFMEJcdTY2MkZWZG9pbmdcdTRFM0JcdTk4OThcdTc2RjhcdTUxNzNcdTkxNERcdTdGNkVcdUZGMENcdTY1ODdcdTY4NjNcdUZGMUFodHRwczovL2RvYy54dWdhb3lpLmNvbS9wYWdlcy9hMjBjZTgvICoqKi8vXHJcblxyXG4gICAgLy8gY2F0ZWdvcnk6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTYyNTNcdTVGMDBcdTUyMDZcdTdDN0JcdTUyOUZcdTgwRkRcdUZGMENcdTlFRDhcdThCQTR0cnVlXHJcbiAgICAvLyB0YWc6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTYyNTNcdTVGMDBcdTY4MDdcdTdCN0VcdTUyOUZcdTgwRkRcdUZGMENcdTlFRDhcdThCQTR0cnVlXHJcbiAgICAvLyBhcmNoaXZlOiBmYWxzZSwgLy8gXHU2NjJGXHU1NDI2XHU2MjUzXHU1RjAwXHU1RjUyXHU2ODYzXHU1MjlGXHU4MEZEXHVGRjBDXHU5RUQ4XHU4QkE0dHJ1ZVxyXG4gICAgLy8gY2F0ZWdvcnlUZXh0OiAnXHU5NjhGXHU3QjE0JywgLy8gXHU3ODhFXHU3MjQ3XHU1MzE2XHU2NTg3XHU3QUUwXHVGRjA4X3Bvc3RzXHU2NTg3XHU0RUY2XHU1OTM5XHU3Njg0XHU2NTg3XHU3QUUwXHVGRjA5XHU5ODg0XHU4QkJFXHU3NTFGXHU2MjEwXHU3Njg0XHU1MjA2XHU3QzdCXHU1MDNDXHVGRjBDXHU5RUQ4XHU4QkE0J1x1OTY4Rlx1N0IxNCdcclxuXHJcbiAgICAvLyBwYWdlU3R5bGU6ICdsaW5lJywgLy8gXHU5ODc1XHU5NzYyXHU5OENFXHU2ODNDXHVGRjBDXHU1M0VGXHU5MDA5XHU1MDNDXHVGRjFBJ2NhcmQnXHU1MzYxXHU3MjQ3IHwgJ2xpbmUnIFx1N0VCRlx1RkYwOFx1NjcyQVx1OEJCRVx1N0Y2RWJvZHlCZ0ltZ1x1NjVGNlx1NjI0RFx1NzUxRlx1NjU0OFx1RkYwOVx1RkYwQyBcdTlFRDhcdThCQTQnY2FyZCdcdTMwMDIgXHU4QkY0XHU2NjBFXHVGRjFBY2FyZFx1NjVGNlx1ODBDQ1x1NjY2Rlx1NjYzRVx1NzkzQVx1NzA3MFx1ODI3Mlx1ODg2Q1x1NjI1OFx1NTFGQVx1NTM2MVx1NzI0N1x1NjgzN1x1NUYwRlx1RkYwQ2xpbmVcdTY1RjZcdTgwQ0NcdTY2NkZcdTY2M0VcdTc5M0FcdTdFQUZcdTgyNzJcdUZGMENcdTVFNzZcdTRFMTRcdTkwRThcdTUyMDZcdTZBMjFcdTU3NTdcdTVFMjZcdTdFQkZcdTY3NjFcdThGQjlcdTY4NDZcclxuXHJcbiAgICAvLyBib2R5QmdJbWc6IFtcclxuICAgIC8vICAgJ2h0dHBzOi8vanNkLmNkbi56emtvLmNuL2doL3h1Z2FveWkvaW1hZ2Vfc3RvcmUvYmxvZy8yMDIwMDUwNzE3NTgyOC5qcGVnJyxcclxuICAgIC8vICAgJ2h0dHBzOi8vanNkLmNkbi56emtvLmNuL2doL3h1Z2FveWkvaW1hZ2Vfc3RvcmUvYmxvZy8yMDIwMDUwNzE3NTg0NS5qcGVnJyxcclxuICAgIC8vICAgJ2h0dHBzOi8vanNkLmNkbi56emtvLmNuL2doL3h1Z2FveWkvaW1hZ2Vfc3RvcmUvYmxvZy8yMDIwMDUwNzE3NTg0Ni5qcGVnJ1xyXG4gICAgLy8gXSwgLy8gYm9keVx1ODBDQ1x1NjY2Rlx1NTkyN1x1NTZGRVx1RkYwQ1x1OUVEOFx1OEJBNFx1NjVFMFx1MzAwMiBcdTUzNTVcdTVGMjBcdTU2RkVcdTcyNDcgU3RyaW5nIHwgXHU1OTFBXHU1RjIwXHU1NkZFXHU3MjQ3IEFycmF5LCBcdTU5MUFcdTVGMjBcdTU2RkVcdTcyNDdcdTY1RjZcdTk2OTRib2R5QmdJbWdJbnRlcnZhbFx1NTIwN1x1NjM2Mlx1NEUwMFx1NUYyMFx1MzAwMlxyXG4gICAgLy8gYm9keUJnSW1nT3BhY2l0eTogMC41LCAvLyBib2R5XHU4MENDXHU2NjZGXHU1NkZFXHU5MDBGXHU2NjBFXHU1RUE2XHVGRjBDXHU5MDA5XHU1MDNDIDAuMX4xLjAsIFx1OUVEOFx1OEJBNDAuNVxyXG4gICAgLy8gYm9keUJnSW1nSW50ZXJ2YWw6IDE1LCAvLyBib2R5XHU1OTFBXHU1RjIwXHU4MENDXHU2NjZGXHU1NkZFXHU2NUY2XHU3Njg0XHU1MjA3XHU2MzYyXHU5NUY0XHU5Njk0LCBcdTlFRDhcdThCQTQxNVx1RkYwQ1x1NTM1NVx1NEY0RHNcclxuICAgIC8vIHRpdGxlQmFkZ2U6IGZhbHNlLCAvLyBcdTY1ODdcdTdBRTBcdTY4MDdcdTk4OThcdTUyNERcdTc2ODRcdTU2RkVcdTY4MDdcdTY2MkZcdTU0MjZcdTY2M0VcdTc5M0FcdUZGMENcdTlFRDhcdThCQTR0cnVlXHJcbiAgICAvLyB0aXRsZUJhZGdlSWNvbnM6IFsgLy8gXHU2NTg3XHU3QUUwXHU2ODA3XHU5ODk4XHU1MjREXHU1NkZFXHU2ODA3XHU3Njg0XHU1NzMwXHU1NzQwXHVGRjBDXHU5RUQ4XHU4QkE0XHU0RTNCXHU5ODk4XHU1MTg1XHU3RjZFXHU1NkZFXHU2ODA3XHJcbiAgICAvLyAgICdcdTU2RkVcdTY4MDdcdTU3MzBcdTU3NDAxJyxcclxuICAgIC8vICAgJ1x1NTZGRVx1NjgwN1x1NTczMFx1NTc0MDInXHJcbiAgICAvLyBdLFxyXG4gICAgLy8gY29udGVudEJnU3R5bGU6IDEsIC8vIFx1NjU4N1x1N0FFMFx1NTE4NVx1NUJCOVx1NTc1N1x1NzY4NFx1ODBDQ1x1NjY2Rlx1OThDRVx1NjgzQ1x1RkYwQ1x1OUVEOFx1OEJBNFx1NjVFMC4gMSBcdTY1QjlcdTY4M0MgfCAyIFx1NkEyQVx1N0VCRiB8IDMgXHU3QUQ2XHU3RUJGIHwgNCBcdTVERTZcdTY1OUNcdTdFQkYgfCA1IFx1NTNGM1x1NjU5Q1x1N0VCRiB8IDYgXHU3MEI5XHU3MkI2XHJcblxyXG4gICAgLy8gdXBkYXRlQmFyOiB7IC8vIFx1NjcwMFx1OEZEMVx1NjZGNFx1NjVCMFx1NjgwRlxyXG4gICAgLy8gICBzaG93VG9BcnRpY2xlOiB0cnVlLCAvLyBcdTY2M0VcdTc5M0FcdTUyMzBcdTY1ODdcdTdBRTBcdTk4NzVcdTVFOTVcdTkwRThcdUZGMENcdTlFRDhcdThCQTR0cnVlXHJcbiAgICAvLyAgIG1vcmVBcnRpY2xlOiAnL2FyY2hpdmVzJyAvLyBcdTIwMUNcdTY2RjRcdTU5MUFcdTY1ODdcdTdBRTBcdTIwMURcdThERjNcdThGNkNcdTc2ODRcdTk4NzVcdTk3NjJcdUZGMENcdTlFRDhcdThCQTQnL2FyY2hpdmVzJ1xyXG4gICAgLy8gfSxcclxuICAgIC8vIHJpZ2h0TWVudUJhcjogZmFsc2UsIC8vIFx1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1NTNGM1x1NEZBN1x1NjU4N1x1N0FFMFx1NTkyN1x1N0VCMlx1NjgwRlx1RkYwQ1x1OUVEOFx1OEJBNHRydWUgKFx1NUM0Rlx1NUJCRFx1NUMwRlx1NEU4RTEzMDBweFx1NEUwQlx1NjVFMFx1OEJCQVx1NTk4Mlx1NEY1NVx1OTBGRFx1NEUwRFx1NjYzRVx1NzkzQSlcclxuICAgIC8vIHNpZGViYXJPcGVuOiBmYWxzZSwgLy8gXHU1MjFEXHU1OUNCXHU3MkI2XHU2MDAxXHU2NjJGXHU1NDI2XHU2MjUzXHU1RjAwXHU1REU2XHU0RkE3XHU4RkI5XHU2ODBGXHVGRjBDXHU5RUQ4XHU4QkE0dHJ1ZVxyXG4gICAgLy8gcGFnZUJ1dHRvbjogZmFsc2UsIC8vIFx1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1NUZFQlx1NjM3N1x1N0ZGQlx1OTg3NVx1NjMwOVx1OTRBRVx1RkYwQ1x1OUVEOFx1OEJBNHRydWVcclxuXHJcbiAgICAvLyBcdTlFRDhcdThCQTRcdTU5MTZcdTg5QzJcdTZBMjFcdTVGMEZcdUZGMDhcdTc1MjhcdTYyMzdcdTY3MkFcdTU3MjhcdTk4NzVcdTk3NjJcdTYyNEJcdTUyQThcdTRGRUVcdTY1MzlcdThGQzdcdTZBMjFcdTVGMEZcdTY1RjZcdTYyNERcdTc1MUZcdTY1NDhcdUZGMENcdTU0MjZcdTUyMTlcdTRFRTVcdTc1MjhcdTYyMzdcdThCQkVcdTdGNkVcdTc2ODRcdTZBMjFcdTVGMEZcdTRFM0FcdTUxQzZcdUZGMDlcdUZGMENcdTUzRUZcdTkwMDlcdUZGMUEnYXV0bycgfCAnbGlnaHQnIHwgJ2RhcmsnIHwgJ3JlYWQnXHVGRjBDXHU5RUQ4XHU4QkE0J2F1dG8nXHUzMDAyXHJcbiAgICAvLyBkZWZhdWx0TW9kZTogJ2F1dG8nLFxyXG5cclxuICAgIC8vIFx1NEZBN1x1OEZCOVx1NjgwRiAgJ3N0cnVjdHVyaW5nJyB8IHsgbW9kZTogJ3N0cnVjdHVyaW5nJywgY29sbGFwc2FibGU6IEJvb2xlYW59IHwgJ2F1dG8nIHwgPFx1ODFFQVx1NUI5QVx1NEU0OT4gICAgXHU2RTI5XHU5OUE4XHU2M0QwXHU3OTNBXHVGRjFBXHU3NkVFXHU1RjU1XHU5ODc1XHU2NTcwXHU2MzZFXHU0RjlEXHU4RDU2XHU0RThFXHU3RUQzXHU2Nzg0XHU1MzE2XHU3Njg0XHU0RkE3XHU4RkI5XHU2ODBGXHU2NTcwXHU2MzZFXHVGRjBDXHU1OTgyXHU2NzlDXHU0RjYwXHU0RTBEXHU4QkJFXHU3RjZFXHU0RTNBJ3N0cnVjdHVyaW5nJyxcdTVDMDZcdTY1RTBcdTZDRDVcdTRGN0ZcdTc1MjhcdTc2RUVcdTVGNTVcdTk4NzVcclxuICAgIHNpZGViYXI6ICdzdHJ1Y3R1cmluZycsXHJcblxyXG4gICAgLy8gXHU2NTg3XHU3QUUwXHU5RUQ4XHU4QkE0XHU3Njg0XHU0RjVDXHU4MDA1XHU0RkUxXHU2MDZGXHVGRjBDKFx1NTNFRlx1NTcyOG1kXHU2NTg3XHU0RUY2XHU0RTJEXHU1MzU1XHU3MkVDXHU5MTREXHU3RjZFXHU2QjY0XHU0RkUxXHU2MDZGKSBzdHJpbmcgfCB7bmFtZTogc3RyaW5nLCBsaW5rPzogc3RyaW5nfVxyXG4gICAgYXV0aG9yOiB7XHJcbiAgICAgIG5hbWU6ICdSZW5Zb25nWGlhbmcnLCAvLyBcdTVGQzVcdTk3MDBcclxuICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9SZW5Zb25nWGlhbmcnLCAvLyBcdTUzRUZcdTkwMDlcdTc2ODRcclxuICAgIH0sXHJcblxyXG4gICAgLy8gXHU1MzVBXHU0RTNCXHU0RkUxXHU2MDZGIChcdTY2M0VcdTc5M0FcdTU3MjhcdTk5OTZcdTk4NzVcdTRGQTdcdThGQjlcdTY4MEYpXHJcbiAgICBibG9nZ2VyOiB7XHJcbiAgICAgIGF2YXRhcjogJy9pbWcvaGVhZGVySW1nLmpwZycsXHJcbiAgICAgIG5hbWU6ICdSZW5Zb25nWGlhbmcnLFxyXG4gICAgICBzbG9nYW46ICdcdTU5MjdcdTRFOENcdTY1QjBcdTc1MUYnLFxyXG4gICAgfSxcclxuICAgIGZvb3RlcjogeyAvLyBcdTk4NzVcdTgxMUFcdTRGRTFcdTYwNkZcclxuICAgICAgY3JlYXRlWWVhcjogMjAyNCwgLy8gXHU1MzVBXHU1QkEyXHU1MjFCXHU1RUZBXHU1RTc0XHU0RUZEXHJcbiAgICAgIGNvcHlyaWdodEluZm86ICdSZW5Zb25nWGlhbmcgfCBNSVQgTGljZW5zZScsIC8vIFx1NTM1QVx1NUJBMlx1NzI0OFx1Njc0M1x1NEZFMVx1NjA2Rlx1RkYwQ1x1NjUyRlx1NjMwMWFcdTY4MDdcdTdCN0VcclxuICAgIH0sXHJcbiAgICAvLyBcdTc5M0VcdTRFQTRcdTU2RkVcdTY4MDcgKFx1NjYzRVx1NzkzQVx1NEU4RVx1NTM1QVx1NEUzQlx1NEZFMVx1NjA2Rlx1NjgwRlx1NTQ4Q1x1OTg3NVx1ODExQVx1NjgwRlx1MzAwMlx1NTE4NVx1N0Y2RVx1NTZGRVx1NjgwN1x1RkYxQWh0dHBzOi8vZG9jLnh1Z2FveWkuY29tL3BhZ2VzL2EyMGNlOC8jc29jaWFsKVxyXG4gICAgc29jaWFsOiB7XHJcbiAgICAgIC8vIGljb25mb250Q3NzRmlsZTogJy8vYXQuYWxpY2RuLmNvbS90L3h4eC5jc3MnLCAvLyBcdTUzRUZcdTkwMDlcdUZGMENcdTk2M0ZcdTkxQ0NcdTU2RkVcdTY4MDdcdTVFOTNcdTU3MjhcdTdFQkZjc3NcdTY1ODdcdTRFRjZcdTU3MzBcdTU3NDBcdUZGMENcdTVCRjlcdTRFOEVcdTRFM0JcdTk4OThcdTZDQTFcdTY3MDlcdTc2ODRcdTU2RkVcdTY4MDdcdTUzRUZcdTgxRUFcdTVERjFcdTZERkJcdTUyQTBcdTMwMDJcdTk2M0ZcdTkxQ0NcdTU2RkVcdTcyNDdcdTVFOTNcdUZGMUFodHRwczovL3d3dy5pY29uZm9udC5jbi9cclxuICAgICAgaWNvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpY29uQ2xhc3M6ICdpY29uLXlvdWppYW4nLFxyXG4gICAgICAgICAgdGl0bGU6ICdcdTUzRDFcdTkwQUVcdTRFRjYnLFxyXG4gICAgICAgICAgbGluazogJ21haWx0bzoyMDczNzQxNjQ1QHFxLmNvbScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpY29uQ2xhc3M6ICdpY29uLWdpdGh1YicsXHJcbiAgICAgICAgICB0aXRsZTogJ0dpdEh1YicsXHJcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL1JlbllvbmdYaWFuZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpY29uQ2xhc3M6ICdpY29uLWVyamknLFxyXG4gICAgICAgICAgdGl0bGU6ICdcdTU0MkNcdTk3RjNcdTRFNTAnLFxyXG4gICAgICAgICAgbGluazogJ2h0dHA6Ly8xNjNjbi50di93TlhkdTJjJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBcdTYyNjlcdTVDNTVcdTgxRUFcdTUyQThcdTc1MUZcdTYyMTBmcm9udG1hdHRlclx1MzAwMlx1RkYwOFx1NUY1M21kXHU2NTg3XHU0RUY2XHU3Njg0ZnJvbnRtYXR0ZXJcdTRFMERcdTVCNThcdTU3MjhcdTc2RjhcdTVFOTRcdTc2ODRcdTVCNTdcdTZCQjVcdTY1RjZcdTVDMDZcdTgxRUFcdTUyQThcdTZERkJcdTUyQTBcdTMwMDJcdTRFMERcdTRGMUFcdTg5ODZcdTc2RDZcdTVERjJcdTY3MDlcdTc2ODRcdTY1NzBcdTYzNkVcdTMwMDJcdUZGMDlcclxuICAgIGV4dGVuZEZyb250bWF0dGVyOiB7XHJcbiAgICAgIGF1dGhvcjoge1xyXG4gICAgICAgIG5hbWU6ICdSZW5Zb25nWGlhbmcnLFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vUmVuWW9uZ1hpYW5nJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIC8vIFx1NkNFOFx1NTE2NVx1NTIzMFx1OTg3NVx1OTc2MjxoZWFkPlx1NEUyRFx1NzY4NFx1NjgwN1x1N0I3RVx1RkYwQ1x1NjgzQ1x1NUYwRlt0YWdOYW1lLCB7IGF0dHJOYW1lOiBhdHRyVmFsdWUgfSwgaW5uZXJIVE1MP11cclxuICBoZWFkOiBbXHJcbiAgICBbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiAnL2ltZy9mYXZpY29uLmljbycgfV0sIC8vZmF2aWNvbnNcdUZGMENcdThENDRcdTZFOTBcdTY1M0VcdTU3MjhwdWJsaWNcdTY1ODdcdTRFRjZcdTU5MzlcclxuICAgIFtcclxuICAgICAgJ21ldGEnLFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ2tleXdvcmRzJyxcclxuICAgICAgICBjb250ZW50OiAnXHU1MjREXHU3QUVGXHU1MzVBXHU1QkEyLFx1NEUyQVx1NEVCQVx1NjI4MFx1NjcyRlx1NTM1QVx1NUJBMixcdTUyNERcdTdBRUYsXHU1MjREXHU3QUVGXHU1RjAwXHU1M0QxLFx1NTI0RFx1N0FFRlx1Njg0Nlx1NjdCNix3ZWJcdTUyNERcdTdBRUYsXHU1MjREXHU3QUVGXHU5NzYyXHU4QkQ1XHU5ODk4LFx1NjI4MFx1NjcyRlx1NjU4N1x1Njg2MyxcdTVCNjZcdTRFNjAsXHU5NzYyXHU4QkQ1LEphdmFTY3JpcHQsanMsRVM2LFR5cGVTY3JpcHQsdnVlLHB5dGhvbixjc3MzLGh0bWw1LE5vZGUsZ2l0LGdpdGh1YixtYXJrZG93bicsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgWydtZXRhJywgeyBuYW1lOiAndGhlbWUtY29sb3InLCBjb250ZW50OiAnIzExYThjZCcgfV0sIC8vIFx1NzlGQlx1NTJBOFx1NkQ0Rlx1ODlDOFx1NTY2OFx1NEUzQlx1OTg5OFx1OTg5Q1x1ODI3MlxyXG4gICAgLy8gW1xyXG4gICAgLy8gICAnc2NyaXB0JyxcclxuICAgIC8vICAge1xyXG4gICAgLy8gICAgICdkYXRhLWFkLWNsaWVudCc6ICdjYS1wdWItNzgyODMzMzcyNTk5MzU1NCcsXHJcbiAgICAvLyAgICAgYXN5bmM6ICdhc3luYycsXHJcbiAgICAvLyAgICAgc3JjOiAnaHR0cHM6Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanMnLFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gXSwgLy8gXHU3RjUxXHU3QUQ5XHU1MTczXHU4MDU0R29vZ2xlIEFkU2Vuc2UgXHU0RTBFIGh0bWxcdTY4M0NcdTVGMEZcdTVFN0ZcdTU0NEFcdTY1MkZcdTYzMDFcdUZGMDhcdTRGNjBcdTUzRUZcdTRFRTVcdTUzQkJcdTYzODlcdUZGMDlcclxuICBdLFxyXG5cclxuXHJcbiAgLy8gXHU2M0QyXHU0RUY2XHU5MTREXHU3RjZFXHJcbiAgcGx1Z2luczogPFVzZXJQbHVnaW5zPltcclxuXHJcbiAgICAvLyBcdTUxNjhcdTY1ODdcdTY0MUNcdTdEMjJcdTMwMDIgXHUyNkEwXHVGRTBGXHU2Q0U4XHU2MTBGXHVGRjFBXHU2QjY0XHU2M0QyXHU0RUY2XHU0RjFBXHU1NzI4XHU2MjUzXHU1RjAwXHU3RjUxXHU3QUQ5XHU2NUY2XHU1OTFBXHU1MkEwXHU4RjdEXHU5MEU4XHU1MjA2anNcdTY1ODdcdTRFRjZcdTc1MjhcdTRFOEVcdTY0MUNcdTdEMjJcdUZGMENcdTVCRkNcdTgxRjRcdTUyMURcdTZCMjFcdThCQkZcdTk1RUVcdTdGNTFcdTdBRDlcdTUzRDhcdTYxNjJcdTMwMDJcdTU5ODJcdTU3MjhcdTYxMEZcdTUyMURcdTZCMjFcdThCQkZcdTk1RUVcdTkwMUZcdTVFQTZcdTc2ODRcdThCRERcdTUzRUZcdTRFRTVcdTRFMERcdTRGN0ZcdTc1MjhcdTZCNjRcdTYzRDJcdTRFRjZcdUZGMDFcdUZGMDhcdTYzQThcdTgzNTBcdUZGMUF2dWVwcmVzcy1wbHVnaW4tdGhpcmRwYXJ0eS1zZWFyY2hcdUZGMDlcclxuICAgIC8vICdmdWxsdGV4dC1zZWFyY2gnLFxyXG5cclxuICAgIC8vIFx1NTNFRlx1NEVFNVx1NkRGQlx1NTJBMFx1N0IyQ1x1NEUwOVx1NjVCOVx1NjQxQ1x1N0QyMlx1OTRGRVx1NjNBNVx1NzY4NFx1NjQxQ1x1N0QyMlx1Njg0Nlx1RkYwOFx1N0VFN1x1NjI3Rlx1NTM5Rlx1NUI5OFx1NjVCOVx1NjQxQ1x1N0QyMlx1Njg0Nlx1NzY4NFx1OTE0RFx1N0Y2RVx1NTNDMlx1NjU3MFx1RkYwOVxyXG4gICAgW1xyXG4gICAgICAndGhpcmRwYXJ0eS1zZWFyY2gnLFxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcmRwYXJ0eTogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1x1NTcyOE1ETlx1NEUyRFx1NjQxQ1x1N0QyMicsXHJcbiAgICAgICAgICAgIGZyb250VXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvemgtQ04vc2VhcmNoP3E9JywgLy8gXHU2NDFDXHU3RDIyXHU5NEZFXHU2M0E1XHU3Njg0XHU1MjREXHU5NzYyXHU5MEU4XHU1MjA2XHJcbiAgICAgICAgICAgIGJlaGluZFVybDogJycsIC8vIFx1NjQxQ1x1N0QyMlx1OTRGRVx1NjNBNVx1NzY4NFx1NTQwRVx1OTc2Mlx1OTBFOFx1NTIwNlx1RkYwQ1x1NTNFRlx1OTAwOVx1RkYwQ1x1OUVEOFx1OEJBNCAnJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdcdTU3MjhSdW5vb2JcdTRFMkRcdTY0MUNcdTdEMjInLFxyXG4gICAgICAgICAgICBmcm9udFVybDogJ2h0dHBzOi8vd3d3LnJ1bm9vYi5jb20vP3M9JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnXHU1NzI4VnVlIEFQSVx1NEUyRFx1NjQxQ1x1N0QyMicsXHJcbiAgICAgICAgICAgIGZyb250VXJsOiAnaHR0cHM6Ly9jbi52dWVqcy5vcmcvdjIvYXBpLyMnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdcdTU3MjhCaW5nXHU0RTJEXHU2NDFDXHU3RDIyJyxcclxuICAgICAgICAgICAgZnJvbnRVcmw6ICdodHRwczovL2NuLmJpbmcuY29tL3NlYXJjaD9xPScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH1cclxuICAgIF0sXHJcblxyXG4gICAgW1xyXG4gICAgICAnb25lLWNsaWNrLWNvcHknLCAvLyBcdTRFRTNcdTc4MDFcdTU3NTdcdTU5MERcdTUyMzZcdTYzMDlcdTk0QUVcclxuICAgICAge1xyXG4gICAgICAgIGNvcHlTZWxlY3RvcjogWydkaXZbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHByZScsICdkaXZbY2xhc3MqPVwiYXNpZGUtY29kZVwiXSBhc2lkZSddLCAvLyBTdHJpbmcgb3IgQXJyYXlcclxuICAgICAgICBjb3B5TWVzc2FnZTogJ1x1NTkwRFx1NTIzNlx1NjIxMFx1NTI5RicsIC8vIGRlZmF1bHQgaXMgJ0NvcHkgc3VjY2Vzc2Z1bGx5IGFuZCB0aGVuIHBhc3RlIGl0IGZvciB1c2UuJ1xyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLCAvLyBwcm9tcHQgbWVzc2FnZSBkaXNwbGF5IHRpbWUuXHJcbiAgICAgICAgc2hvd0luTW9iaWxlOiBmYWxzZSwgLy8gd2hldGhlciB0byBkaXNwbGF5IG9uIHRoZSBtb2JpbGUgc2lkZSwgZGVmYXVsdDogZmFsc2UuXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG5cclxuICAgIFtcclxuICAgICAgJ2RlbW8tYmxvY2snLCAvLyBkZW1vXHU2RjE0XHU3OTNBXHU2QTIxXHU1NzU3IGh0dHBzOi8vZ2l0aHViLmNvbS94aWd1YXhpZ3VhL3Z1ZXByZXNzLXBsdWdpbi1kZW1vLWJsb2NrXHJcbiAgICAgIHtcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgLy8ganNMaWI6IFsnaHR0cDovL3h4eCddLCAvLyBcdTU3MjhcdTdFQkZcdTc5M0FcdTRGOEIoanNmaWRkbGUsIGNvZGVwZW4pXHU0RTJEXHU3Njg0anNcdTRGOURcdThENTZcclxuICAgICAgICAgIC8vIGNzc0xpYjogWydodHRwOi8veHh4J10sIC8vIFx1NTcyOFx1N0VCRlx1NzkzQVx1NEY4Qlx1NEUyRFx1NzY4NGNzc1x1NEY5RFx1OEQ1NlxyXG4gICAgICAgICAgLy8gdnVlOiAnaHR0cHM6Ly9qc2QuY2RuLnp6a28uY24vbnBtL3Z1ZS9kaXN0L3Z1ZS5taW4uanMnLCAvLyBcdTU3MjhcdTdFQkZcdTc5M0FcdTRGOEJcdTRFMkRcdTc2ODR2dWVcdTRGOURcdThENTZcclxuICAgICAgICAgIGpzZmlkZGxlOiBmYWxzZSwgLy8gXHU2NjJGXHU1NDI2XHU2NjNFXHU3OTNBIGpzZmlkZGxlIFx1OTRGRVx1NjNBNVxyXG4gICAgICAgICAgY29kZXBlbjogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU2NjNFXHU3OTNBIGNvZGVwZW4gXHU5NEZFXHU2M0E1XHJcbiAgICAgICAgICBob3Jpem9udGFsOiBmYWxzZSwgLy8gXHU2NjJGXHU1NDI2XHU1QzU1XHU3OTNBXHU0RTNBXHU2QTJBXHU1NDExXHU2ODM3XHU1RjBGXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICd2dWVwcmVzcy1wbHVnaW4tem9vbWluZycsIC8vIFx1NjUzRVx1NTkyN1x1NTZGRVx1NzI0N1xyXG4gICAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6ICcudGhlbWUtdmRvaW5nLWNvbnRlbnQgaW1nOm5vdCgubm8tem9vbSknLCAvLyBcdTYzOTJcdTk2NjRjbGFzc1x1NjYyRm5vLXpvb21cdTc2ODRcdTU2RkVcdTcyNDdcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBiZ0NvbG9yOiAncmdiYSgwLDAsMCwwLjYpJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgJ0B2dWVwcmVzcy9sYXN0LXVwZGF0ZWQnLCAvLyBcIlx1NEUwQVx1NkIyMVx1NjZGNFx1NjVCMFwiXHU2NUY2XHU5NUY0XHU2ODNDXHU1RjBGXHJcbiAgICAgIHtcclxuICAgICAgICB0cmFuc2Zvcm1lcjogKHRpbWVzdGFtcCwgbGFuZykgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGRheWpzKHRpbWVzdGFtcCkuZm9ybWF0KCdZWVlZL01NL0RELCBISDptbTpzcycpXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBbJ0B2dWVwcmVzcy1yZWNvL3Z1ZXByZXNzLXBsdWdpbi1rYW4tYmFuLW5pYW5nJywge1xyXG4gICAgICB0aGVtZTogW1wibWlrdVwiXSxcclxuICAgICAgY2xlYW46IHRydWUsXHJcbiAgICAgIHdpZHRoOiAyMTAsXHJcbiAgICAgIGhlaWdodDogMzA4LFxyXG4gICAgfV0sXHJcbiAgICBbXHJcbiAgICAgIFwiY3Vyc29yLWVmZmVjdHNcIixcclxuICAgICAge1xyXG4gICAgICAgIHNpemU6IDQsIC8vIHNpemUgb2YgdGhlIHBhcnRpY2xlLCBkZWZhdWx0OiAyXHJcbiAgICAgICAgc2hhcGU6IFwic3RhclwiLCAvLyBbJ3N0YXInIHwgJ2NpcmNsZSddLCAvLyBzaGFwZSBvZiB0aGUgcGFydGljbGUsIGRlZmF1bHQ6ICdzdGFyJ1xyXG4gICAgICAgIHpJbmRleDogOTk5OTk5OTk5LCAvLyB6LWluZGV4IHByb3BlcnR5IG9mIHRoZSBjYW52YXMsIGRlZmF1bHQ6IDk5OTk5OTk5OVxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICBdLFxyXG5cclxuICBtYXJrZG93bjoge1xyXG4gICAgbGluZU51bWJlcnM6IHRydWUsXHJcbiAgICBleHRyYWN0SGVhZGVyczogWydoMicsICdoMycsICdoNCcsICdoNScsICdoNiddLCAvLyBcdTYzRDBcdTUzRDZcdTY4MDdcdTk4OThcdTUyMzBcdTRGQTdcdThGQjlcdTY4MEZcdTc2ODRcdTdFQTdcdTUyMkJcdUZGMENcdTlFRDhcdThCQTRbJ2gyJywgJ2gzJ11cclxuICB9LFxyXG5cclxuICAvLyBcdTc2RDFcdTU0MkNcdTY1ODdcdTRFRjZcdTUzRDhcdTUzMTZcdTVFNzZcdTkxQ0RcdTY1QjBcdTY3ODRcdTVFRkFcclxuICBleHRyYVdhdGNoRmlsZXM6IFtcclxuICAgICcudnVlcHJlc3MvY29uZmlnLnRzJ1xyXG4gIF1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUlBO0FBRUE7QUFFQSxJQUFPLGlCQUFRLHlCQUE0QztBQUFBLEVBQ3pELE9BQU87QUFBQSxFQUdQLFNBQVM7QUFBQSxJQUNQLEtBQUs7QUFBQSxNQUNILE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQTtBQUFBO0FBQUEsRUFNakIsYUFBYTtBQUFBLElBRVgsS0FBSztBQUFBLE1BQ0gsRUFBRSxNQUFNLGdCQUFNLE1BQU07QUFBQSxNQUNwQjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBRUw7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQTtBQUFBLFVBRVI7QUFBQSxZQUNFLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlaO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsVUFDTCxFQUFFLE1BQU07QUFBQSxVQUNSLEVBQUUsTUFBTTtBQUFBLFVBQ1IsRUFBRSxNQUFNO0FBQUEsVUFDUixFQUFFLE1BQU07QUFBQTtBQUFBO0FBQUEsTUFHWjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsRUFBRSxNQUFNO0FBQUEsVUFDUixFQUFFLE1BQU07QUFBQTtBQUFBO0FBQUEsTUFHWjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsRUFBRSxNQUFNO0FBQUEsVUFDUixFQUFFLE1BQU07QUFBQSxVQUNSLEVBQUUsTUFBTTtBQUFBO0FBQUE7QUFBQSxNQUdaO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEs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
