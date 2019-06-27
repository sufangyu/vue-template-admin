const title = '[译] Vue 最黑暗的一天';

const content = `<p>原文：<a target="_blank" href="https://link.juejin.im?target=https%3A%2F%2Fdev.to%2Fdanielelkington%2Fvue-s-darkest-day-3fgh" rel="nofollow noopener noreferrer">Vue's Darkest Day</a>
作者：<a target="_blank" href="https://link.juejin.im?target=https%3A%2F%2Fdev.to%2Fdanielelkington" rel="nofollow noopener noreferrer">Daniel Elkington</a></p>
<p><em>译者注：原文写于2019年6月21日</em></p>
<p>今天，我惊讶的发现，往常积极友好的 VueJS 社区陷入了一场激烈的战争。
两周前，Vue 的创建者尤雨溪发布了一个<a target="_blank" href="https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Frfcs%2Fpull%2F42" rel="nofollow noopener noreferrer">请求意见稿（RFC）</a>，用于在即将发布的 Vue 3.0 中使用基于函数的方式编写 Vue 组件。今天，<a target="_blank" href="https://link.juejin.im?target=https%3A%2F%2Fwww.reddit.com%2Fr%2Fvuejs%2Fcomments%2Fc319el%2Fvue_3_will_change_vue_in_a_big_way_current_syntax%2F" rel="nofollow noopener noreferrer">一个 Reddit 上批评性的帖子</a>和 <a target="_blank" href="https://link.juejin.im?target=https%3A%2F%2Fwww.reddit.com%2Fr%2Fvuejs%2Fcomments%2Fc319el%2Fvue_3_will_change_vue_in_a_big_way_current_syntax%2F" rel="nofollow noopener noreferrer">Hacker News 上一些类似的批评性的评论</a>，引起大批开发者涌向原本的 RFC 来表达他们的愤怒，其中一些有点侮辱性。
在很多地方都有人声称：</p>
<ul>
  <li>所有 Vue 代码都必须以全新的方式重写，因为现有的语法正在被移除，并且被其他东西取代；</li>
  <li>人们花在学习 Vue 上的所有时间都被浪费了，因为一切都会改变；</li>
  <li>新语法比旧的更糟糕，因为它没有强制的结构，并且会导致意大利面条式代码；</li>
  <li>Vue 核心团队在没有任何咨询的情况下突然施行一个巨大的破坏性的变化；</li>
  <li>Vue 要变成 React 了！</li>
  <li>不，Vue 要变成 AngularJS/Angular 了！</li>
  <li>所有 HTML 都要写在一个超长的字符串里！</li>
</ul>
<p>看过 Reddit 上成堆的负面评论，你可能会在 <a target="_blank" href="https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Frfcs%2Fpull%2F42" rel="nofollow noopener noreferrer">RFC 页面</a>上惊讶的发现尤雨溪的 RFC 收到的正面的表情回应的比例比负面的高得多，而且许多早期评论都是相当正面的。
实际上，第一条评论就充满了溢美之词。</p>
<p>我就是第一个写评论的人。
我碰巧收到新 RFC 的通知，马上读了一下，发现这正是我想从 Vue 3.0 得到的，而且它会给我极大的帮助，于是我在 RFC 发布 15 分钟后留下了第一条评论来表达我的谢意。
我希望在这里进一步说明为什么我觉得新提案是一个如此好的主意，但首先，要回应一些批评。</p>
<p>我怀疑很多人在阅读了 Hacker News 或 Reddit 上有着很多误导性评论的帖子之后有点激动，他们在没有阅读<a target="_blank" href="https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Frfcs%2Fblob%2Ffunction-apis%2Factive-rfcs%2F0000-function-api.md" rel="nofollow noopener noreferrer">原始提案</a>的情况下就表达了自己的愤怒。
尤雨溪已经更新了这个提案，通过问答的方式回应了人们的很多问题，总的来说：</p>
<ul>
  <li>如果你不想重写任何代码，那么你就不需要重写——新语法是附加的，而且只要旧语法仍然被广泛使用，它在 Vue 3.0 中依然有效。就算它最终被从核心代码中移除了，<a target="_blank" href="https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Frfcs%2Fblob%2Ffunction-apis%2Factive-rfcs%2F0000-function-api.md%23adoption-strategy" rel="nofollow noopener noreferrer">也可以很容易地通过插件来使旧语法 100% 有效</a>。</li>
  <li>学习 Vue 的时间并没有浪费——新组件语法使用的概念与你之前花时间学习的一样，其他概念，例如单文件组件、模板、scoped style 的功用完全一样。</li>
  <li>没有经过咨询，就不会改变—— <em>RFC</em> 就是在 <em>咨询</em>。新语法离发布还有很长一段路要走。</li>
  <li>不，HTML 代码不需要被写进一个超长字符串。</li>
</ul>
<p>一个更主观的观点是：新语法不如旧语法，并且会导致结构化程度较低的代码。
我希望通过一个简单的例子来说明为什么我在看到 RFC 时如此兴奋，以及为什么我觉得它更优秀，将会导致结构化 <em>更好</em> 的代码。</p>
<ul>
  <li>当他们输入完宠物的名字时会显示一条信息；</li>
  <li>另一条信息会在他们选择宠物的大小后显示。</li>
</ul>
<figure><img class="lazyload inited loaded" data-src="https://user-gold-cdn.xitu.io/2019/6/23/16b842311d743cc2?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" data-width="400" data-height="213" src="https://user-gold-cdn.xitu.io/2019/6/23/16b842311d743cc2?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"><figcaption></figcaption></figure>
<figure><img class="lazyload inited loaded" data-src="https://user-gold-cdn.xitu.io/2019/6/23/16b8423333379e72?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" data-width="400" data-height="346" src="https://user-gold-cdn.xitu.io/2019/6/23/16b8423333379e72?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"><figcaption></figcaption></figure>
<p>...</p>
<p>这是目前为止 Vue 最黑暗的一天吗？看起来是的。一直团结追随这个项目方向的社区已经分裂了。
但我希望人们能够重新审视这个提案，它没有破坏任何东西，<a target="_blank" href="https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Frfcs%2Fpull%2F42%23issuecomment-502736555" rel="nofollow noopener noreferrer">只要他们想，仍然可以按照选项的类型来组织它们</a>，但是可以做到更多——更清晰的代码、更简洁的代码、更有意思的库、还有完善的 Typescript 支持。</p>
<p>...</p>
`;

const data = {
  title,
  content,
};

export default data;
