// Description.jsx
import React from 'react';

const Description = () => {
    return (
        <div className="mx-auto max-w-4xl mt-10 px-4 py-8 bg-white shadow-lg rounded-lg">
        
<p class="text-lg text-gray-700 mb-4">
    本网站的创意来自一本在豆瓣评分高达9.4分的书籍——<a href="https://book.douban.com/subject/25977798/" target="_blank" class="text-green-600 hover:text-green-800 underline">Word Power Made Easy</a>。这本书改变了我的思维方式，它可以帮助我们更好地理解和记忆单词。它采用在<strong>故事</strong>中学习单词，对每一个单词从它的起源讲起，让我们从<strong>“根”</strong>上理解单词。并且对每一个相关的单词也会做解释。也就是说，有了它我们背单词不再是一个一个的背，而是<strong>“一串一串”</strong>的背，背一个单词可以延申到数十个。极大的提高了大家学习的效率。遗憾的是，作者仅介绍了一千个单词。
<br />
幸运的是，随着大型语言模型ChatGPT的问世，为了满足人们对书本内容的拓展需求，我决定使用大模型，运用Chain of Thought推理方法训练开源模型Mixtral-8x22B，以原作者的风格对五万个常用单词进行解释。在两张Nvidia 3090ti服务器上，整整跑了经过连续五天五夜，终于完成了对50000个单词的详细解释。
</p>
<h2 class="text-2xl font-semibold text-gray-900 my-3">如何使用？</h2>

<p class="text-lg text-gray-700 mb-4">
    只需在下方的文本框中输入所需的单词，即可快速获得该单词的详细解释。这是本网站的主要功能接口。
</p>

<h2 class="text-2xl font-semibold text-gray-900 my-3">什么人能用？</h2>
很遗憾的是，上面的推荐的书包括这个网站并不是每一个人都能用，确实有一定的门槛，至少需要英语四级以上最好六级才使用。如果单词量实在太少的话，这个网站的帮助也不会太大。但原则上来讲，你只要可以读下去，就可以使用这个网站。会受益良多。
<h2 class="text-2xl font-semibold text-gray-900 my-3">联系方式</h2>
<p class="text-lg text-gray-700 mb-4">
    电子邮箱：<a href="mailto:chunyoupeng@163.com" class="text-green-600 hover:text-green-800 underline">chunyoupeng@163.com</a>
    <br />
    QQ: 2485166642
</p>

        </div>
    );
};

export default Description;
