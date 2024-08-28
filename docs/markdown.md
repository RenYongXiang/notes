---
title: ✨MarkDonw 常用语法🔥
date: 2024-08-27 22:34:50
permalink: /markdown
sticky: 1
titleTag: 原创
categories:
  - 更多
  - 实用技巧 
tags:
  - markdown
  - 实用技巧 
author:
  name: RenYongXiang
  link: https://github.com/RenYongXiang
---
  
#### 目录说明
- 修改导航：`docs/.vuepress/config.ts`；
- 目录页对应笔记目录在目录文件的data.path配置；
- 所有图片放在docs/.vuepress/public/img下，引用的时候/img/图片名称；
- 笔记主要在 01.编程 --- 07.技术文件夹中
- 笔记目录中，所有的文件夹或者文件，命名必须要以数字开头；
- 新建.md文件之前最好把项目运行起来：`npm run dev:win`
#### 每个笔记文件前面必须添加以下内容
```markdown
---
title: 文章标题：执行 `npm run dev:win`会自动生成
date: 创作时间：执行 `npm run dev:win`会自动生成
permalink: 跳转链接：执行 `npm run dev:win`会自动生成
titleTag: 原创（加上这个标题后面会显示’原创‘tag）
sticky: 1 是否置顶（添加这个属性文章就会置顶）
categories:
  - 分类1
  - 分类2
tags:
  - 标签
---
```
#### 1.课程介绍

Markdown:可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有HTML的格式

为什么要学习Markdown：因为Markdown可以为我们生成HTML

#### 2.设置标题

**html标题标记的生成(h1--h6)**

**# h1 -- ###### h6 标题h1--h6**

#### 3.自然段

自然段换行：**空行**隔开 生成段落，相当于html多个p标签

两个**空白** 相当于一个`<br/>`  在一个p标签内

#### 4.引用表现

`>+空格`  生成`<blockquote>`标签

#### 5.增加分割线

为文章添加分割线：---   ***  ___  - - - 四种方式，生成`<hr>`

#### 6.强调表现

斜体：星号 + 内容 + 星号；下划线 + 内容 +下划线   `<em>斜体</em>`

粗体：星号星号 + 内容 + 星号星号； 下划线下划线 + 内容 + 下划线下划线  `<strong>粗体</strong>`

~~~markdown
斜体：*XXX* 或 _XXX_
粗体：**XXX** 或 __XXX__
~~~

#### 7.列表表示

\+ - * 生成无序列表 ul>li

数字：生成有序列表 ol>li 格式：数字.空格 内容 注意：数字可以任意，一般1. 0. 0. 0. 0.

分为：不加缩进列表

缩进：加两个空格 (子列表)

#### 8.超文本链接

~~~markdown
http://baidu.com
<http://baidu.com>
[百度](http://baidu.com)
[百度](http://baidu.com "百度一下，你就知道")    title:"百度一下，你就知道"
~~~

#### 9.代码高亮显示

~~~markdown
  ```javascript
    function add(x,y){
      return x+y;
    }
   ```

`add(x,y)`   表示代码的引用
~~~

#### 10.图片显示

```markdown
说明：
![alt文字](url title)

实例：制作图片链接
[![gitHub](http://github.com "gitHub官方网站")](http://github.com)
```

#### 11.表格显示

##### 使用 - 和 | 来制作表格

~~~markdown
| TH1 | TH2 | TH3 |
------|-----|------
| TD1 | TD3 | TD5 |
| TD2 | TD4 | TD6 |
~~~

##### 使用表格对齐

```markdown
| 居左 | 居中 | 居右 |
|:---|:---:|---:|
| 1 | 2 | 3 |
| 4 | 5 | 6 |
```

#### 12、添加附件下载链接

- 把文档文件放在.vuepress/public/docsDir下对应的文件夹中

  示例： :fire: [前端开发规范文档](/docsDir/Front/前端开发规范文档.docx "前端开发规范文档")

```md
:fire: [前端开发规范文档](/docsDir/Front/前端开发规范文档.docx "前端开发规范文档")
```

#### 13、emoji表情图

:art: (调色板)
:zap:(闪电)
:fire: (火焰)
:bug: (bug)
:ambulance: (急救车)
:sparkles: (火花)
:memo: (备忘录)
:rocket: (火箭)
:lipstick: (口红)
:tada: (庆祝)
:white_check_mark: (白色复选框)
:lock: (锁)
:apple: (苹果)
:penguin: (企鹅)
:checkered_flag: (旗帜)
:bookmark: (书签)
:rotating_light: (警车灯)
:construction: (施工)
:green_heart: (绿心)
:arrow_down: (下降箭头)
:arrow_up: (上升箭头)
:construction_worker: (工人)
:chart_with_upwards_trend: (上升趋势图)
:hammer: (锤子)
:heavy_minus_sign: (减号)
:whale: (鲸鱼)
:heavy_plus_sign: (加号)
:wrench: (扳手)
:globe_with_meridians: (地球)
:pencil2: (铅笔)
:ok_hand: (OK 手势)

```md
:art: (调色板)
:zap:(闪电)
:fire: (火焰)
:bug: (bug)
:ambulance: (急救车)
:sparkles: (火花)
:memo: (备忘录)
:rocket: (火箭)
:lipstick: (口红)
:tada: (庆祝)
:white_check_mark: (白色复选框)
:lock: (锁)
:apple: (苹果)
:penguin: (企鹅)
:checkered_flag: (旗帜)
:bookmark: (书签)
:rotating_light: (警车灯)
:construction: (施工)
:green_heart: (绿心)
:arrow_down: (下降箭头)
:arrow_up: (上升箭头)
:construction_worker: (工人)
:chart_with_upwards_trend: (上升趋势图)
:hammer: (锤子)
:heavy_minus_sign: (减号)
:whale: (鲸鱼)
:heavy_plus_sign: (加号)
:wrench: (扳手)
:globe_with_meridians: (地球)
:pencil2: (铅笔)
:ok_hand: (OK 手势)
```
### 扩展

[markdown 中流程图详解](https://blog.csdn.net/suoxd123/article/details/84992282)