---
title: SQL Database of Filesystem
date: "2019-04-21T22:12:03.284Z"
description: "Filesystem analysis tool"
---

I was running out of disk space on my 128GB Surface Pro, so I needed to find out where all my space went.
I made a python package, [`directory_to_sql`](https://github.com/hydrospanner/directory_to_sql), to walk through a directory tree, gather file system data, and store it in a SQLite database.

The data retrieved includes:

- File sizes and modification date.
- Folder sizes and file counts.
- Recursive (including sub-folders) folder sizes and file counts.


The package contains several queries to find top 10 largest files and folders. This was all I really needed to solve my space problem. 

The package returns a database connection to the SQL database, so it's very extendable for further analysis. The package is published on [PiPy](https://pypi.org/project/directory-to-sql/) and uses Travis CI.
