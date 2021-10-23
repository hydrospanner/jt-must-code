---
title: Google's Deep Dream
date: "2016-09-12T22:12:03.284Z"
description: "Getting weird with deep learning image processing"
---

<div className="Image__Medium">
  <img src="./images/deep_dream_iterations.gif" alt="This GIF shows how the number of Deep Dream iterations affects the image." />
</div>

Google's Deep Dream enhances patterns in an image similar to the way your mind perceives a face in the moon, an algorithmic pareidolia. I recently found a Jupyter Notebook, published by Google, showing how to produce the Deep Dream visuals. I thought I'd give it a shot.

If you have never heard of Deep Dream, this GIF shows its effect on an image.
This GIF shows how the number of Deep Dream iterations affects the image.

GitHub is not able to show two of the GIFs I created in my notebook due to file size limitations. I included them in this blog post (one I converted to video).

<iframe width="560" height="315" src="https://www.youtube.com/embed/geEyYqqpHKs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This video was made by applying the Deep Dream filter, zooming in, and looping that 200 times. There are some noticeable differences between this video and the [original GIF](https://github.com/hydrospanner/Deep-Dream/blob/master/img%20loops/zoomgif.gif).

[Here's how I used the Deep Dream program.](https://nbviewer.jupyter.org/github/hydrospanner/Deep-Dream/blob/master/deep%20dream.ipynb)

I'm happy with how it turned out. I was able to see the capabilities of Deep Dream by iterating through various settings. I was able to use Python to turn the generated images into labeled GIFs and tiled images. I think it turned out to be an effective way to display the data.

### Installation

This Notebook uses Python Imaging Library (PIL) which has yet to release a version for Python 3.X, so I'll need to run the notebook on Python 2.7. Good thing Anaconda makes managing different Python environments easy. I wonder why Google didn't use Pillow instead and run the project on Python 3.

Installing Caffe was more difficult than I expected. Some issues I came across are:

-   Instead of using a package manager, Caffe needs to be built with Visual Studio.
-   There are multiple versions of Caffe for Windows available on GitHub. The two I tried were from Berkeley Vision and Learning Center (BVLC) and Microsoft.
    -   When I tried to build Microsoft's Caffe, the build failed. This was due to the build requiring a debug version of Python. Oddly the installation instructions made no mention of this requirement. It's only mentioned in the .PROPS file where the build's variables are set.
    -   I was able to build the BVLC version of Caffe, even though it mentioned the same debug requirement in the .PROPS file.

The Microsoft Surface I'm running this on has an integrated GPU, which does not support NVIDIA's CUDA. I had to use a CpuBuildOnly build. At default settings it took about 5 minutes to render an image using most filters. I would look into a GPU build for a larger project.

[Source for this project](https://github.com/hydrospanner/Deep-Dream)

For more Deep Dreams, see [this Instagram](https://www.instagram.com/deepdreamgenerator/).
