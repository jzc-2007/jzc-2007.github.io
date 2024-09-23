---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Shenzhen Middle School, Guangdong, China (2018-2023)
* Preparatory Year at Tsinghua University(IIIS, Also known as Yao Class), Beijing, China (2023.9-2024.7)
* Undergrad at MIT, Cambridge, MA (2024.9-)


  
Skills
======
* C++/Python

Publications
======

A pdf version of my CV is available [here](http://academicpages.github.io/files/CV.pdf).
  
  {% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}
