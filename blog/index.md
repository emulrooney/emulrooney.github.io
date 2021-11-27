---
layout: default
title: "Blog"
---

## Blog

{% for post in site.posts limit:1 %}

{{ post.date | date: "%-d %B %Y" }}
[{{ post.short_description | strip_html }}]({{post.url}})

{% endfor %}