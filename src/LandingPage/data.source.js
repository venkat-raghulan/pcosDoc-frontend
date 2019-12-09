import React from 'react';
export const Banner50DataSource = {
  wrapper: { className: 'home-page-wrapper banner5' },
  page: { className: 'home-page banner5-page' },
  childWrapper: {
    className: 'banner5-title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>PCOS Doc</p>
          </>
        ),
        className: 'banner5-title',
      },
      {
        name: 'explain',
        className: 'banner5-explain',
        children: (
          <>
            <p>With PCOS, You are your own doctor!</p>
          </>
        ),
      },
      {
        name: 'content',
        className: 'banner5-content',
        children: (
          <>
            <p>Manage your PCOS by managing your lifestyle.</p>
          </>
        ),
      },
      {
        name: 'button',
        className: 'banner5-button-wrapper',
        children: {
          href: '#',
          className: 'banner5-button',
          type: 'primary',
          children: (
            <>
              <p>Join Now</p>
            </>
          ),
        },
      },
    ],
  },
  image: {
    className: 'banner5-image',
    children:
      'https://commercialfleetfinancing.com/wp-content/uploads/2015/02/Happy-woman-LIKE.png',
  },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>Approach</p>
          </>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <>
                  <p>EAT FIT</p>
                </>
              ),
            },
            {
              name: 'content',
              children: (
                <>
                  <p>Take charge of your diet with PCOS friendly food</p>
                </>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <>
                  <p>EXERCISE</p>
                </>
              ),
            },
            {
              name: 'content',
              children: (
                <>
                  <p>
                    Exercise daily to not only lose weight but also to balance
                    your hormones
                  </p>
                </>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <>
                  <p>MIND FIT</p>
                </>
              ),
            },
            {
              name: 'content',
              children: (
                <>
                  <p>
                    Meditation helps keep your stress levels and the hormones
                    under control
                  </p>
                </>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Teams00DataSource = {
  wrapper: { className: 'home-page-wrapper teams0-wrapper' },
  OverPack: { playScale: 0.3, className: 'home-page teams0' },
  BannerAnim: {
    className: 'banner-anim',
    children: [
      {
        name: 'elem0',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          children: [
            {
              name: 'image',
              children:
                'https://png2.cleanpng.com/sh/261fc1c344bd13d469c880237ca5cbbc/L0KzQYq3VcI4N5l7f5H0aYP2gLBuTgdwdZJzRdlycnywf8Pugf5qgpJ5gdH3LXPreb3rTfFld51qi9VubnPoPYbqhfMyOGc5faRrYkS3PoW3U8M6P2o6SacAOEm6RIa9VMkzQGgziNDw/kisspng-woman-girl-organization-child-adolescence-5cec1064e2bb44.4033979515589745649287.png',
              className: 'teams0-image',
            },
            {
              name: 'content',
              children: (
                <>
                  <p>
                    PCOS Doc changed my life. I always knew I have to live with
                    PCOS for my entire life. But, knowing that there is an
                    entire community willing to help me at every step made this
                    whole thing look much more manageable.
                  </p>
                </>
              ),
              className: 'teams0-content',
            },
            {
              name: 'title',
              children: (
                <>
                  <p>Susan</p>
                </>
              ),
              className: 'teams0-h1',
            },
            {
              name: 'content2',
              children: (
                <>
                  <p>Community member since 2018</p>
                </>
              ),
              className: 'teams0-content',
            },
          ],
        },
      },
      {
        name: 'elem1',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          children: [
            {
              name: 'image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
              className: 'teams0-image',
            },
            {
              name: 'content',
              children: (
                <>
                  <p>
                    I lost 18 kg after joining this community. Losing weight not
                    only helped rediscover my confidence back but also helped a
                    lot with the symptoms. I am getting married soon and look
                    forward to making babies :)
                  </p>
                </>
              ),
              className: 'teams0-content',
            },
            {
              name: 'title',
              children: (
                <>
                  <p>Lucy</p>
                </>
              ),
              className: 'teams0-h1',
            },
            {
              name: 'content2',
              children: (
                <>
                  <p>Community member since 2017</p>
                </>
              ),
              className: 'teams0-content',
            },
          ],
        },
      },
    ],
  },
};
export const Content90DataSource = {
  wrapper: { className: 'home-page-wrapper content9-wrapper' },
  page: { className: 'home-page content9' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <>
            <p>Our Story</p>
          </>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'timeline',
    children: [
      {
        name: 'block1',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://cdn2.iconfinder.com/data/icons/verbal-communication-two-tone/48/Paul-16-512.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: {
            className: 'block-name',
            children: (
              <>
                <p>PCOS Doc</p>
              </>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <>
                <p>The beginning</p>
              </>
            ),
          },
          time: {
            className: 'block-time',
            children: (
              <>
                <p>Year 2014</p>
              </>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <>
                <p>Dr Suganya - the original PCOS Doc</p>
              </>
            ),
          },
          content: {
            className: 'block-content',
            children: (
              <>
                <p>
                  Dr Suganya was suffering from PCOS since her early adulthood
                  and after the early suffering, started taking charge of her
                  life with PCOS. Being a doctor, she was able to scientifically
                  treat herself and started changing her lifestyle. This yielded
                  immediate results. She started helping other women suffering
                  from PCOS take charge of their life.
                </p>
              </>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://cdn2.iconfinder.com/data/icons/verbal-communication-two-tone/48/Paul-16-512.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: {
            className: 'block-name',
            children: (
              <>
                <p>PCOS Doc</p>
              </>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <>
                <p>The growth</p>
              </>
            ),
          },
          time: {
            className: 'block-time',
            children: (
              <>
                <p>Year 2017</p>
              </>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <>
                <p>The informal group becomes a community</p>
              </>
            ),
          },
          content: {
            className: 'block-content',
            children: (
              <>
                <p>
                  Slowly, the number of women she helped started growing and
                  they realised the benefits of a social circle and helping each
                  other out.
                </p>
              </>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://cdn2.iconfinder.com/data/icons/verbal-communication-two-tone/48/Paul-16-512.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg',
          },
          name: {
            className: 'block-name',
            children: (
              <>
                <p>PCOS Doc</p>
              </>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <>
                <p>The Now!</p>
              </>
            ),
          },
          time: {
            className: 'block-time',
            children: (
              <>
                <p>Year 2019</p>
              </>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <>
                <p>PCOS Doc goes online</p>
              </>
            ),
          },
          content: {
            className: 'block-content',
            children: (
              <>
                <p>
                  What was a close-knit community with so much of knowledge and
                  learnings is now going online to try and help women across the
                  world join and take charge of their lives.
                </p>
              </>
            ),
          },
        },
      },
    ],
  },
};
export const Pricing00DataSource = {
  wrapper: { className: 'home-page-wrapper pricing0-wrapper' },
  OverPack: { playScale: 0.3, className: 'home-page pricing0' },
  imgWrapper: { className: 'pricing0-img-wrapper', md: 12, xs: 24 },
  img: {
    className: 'pricing0-img',
    name: 'image',
    children:
      'http://www.bellaroccawellness.com/_Media/62517604_m-1-f73c8932_med_hr.png',
  },
  childWrapper: {
    className: 'pricing0-text-wrapper',
    md: 12,
    xs: 24,
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>Join the community NOW!</p>
          </>
        ),
        className: 'pricing0-title',
      },
      {
        name: 'content',
        children: (
          <>
            <p>Take charge of your life.</p>
          </>
        ),
        className: 'pricing0-content',
      },
      {
        name: 'title~k3y43yw4c6j',
        className: '',
        children: (
          <>
            <p>
              <br />
            </p>
          </>
        ),
      },
      {
        name: 'button~k3y45w6odl',
        className: '',
        children: {
          children: (
            <>
              <p>Signup</p>
            </>
          ),
          href: '#',
          type: 'default',
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <>
        <span>
          ©2018 <a href="https://motion.ant.design">PCOS Doc</a>&nbsp;All Rights
          Reserved
        </span>
      </>
    ),
  },
};
