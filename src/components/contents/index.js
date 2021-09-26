import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import "./index.css"

const { Content } = Layout;

class Contents extends React.Component {
    render() {
        return (
            <div className="contents" style={{ overflow: "auto" }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>数值分析</Breadcrumb.Item>
                    <Breadcrumb.Item>插值方法</Breadcrumb.Item>
                </Breadcrumb>
                <Content className="contents-content" style={{ height: "800px" }}>
                    <article>
                        <h3>插值方法</h3>
                        <p>
                            本笔记权作为本学期数值分析学习的总结和回顾，参考教材有徐萃薇、孙绳武编的《计算方法引论》，和Timothy Sauer的《数值分析》。这一节介绍的是求解方程（主要针对非线性方程）的方法。
                            对于许多数值分析中的算法，我们往往关注以下几件事情：
                            算法的输入是什么，输出是什么，从输入得到输出的算法步骤是什么；
                            算法是否总能得到足够精度的输出，若否，何时能得到足够精度的输出；
                            算法是否能用足够小的代价得到足够精度的输出。
                            总结起来，上述三个问题导向了关于一个算法的步骤、误差和时间复杂度的讨论，这是我们在讨论算法时总要涉及的三个部分，往后也时常从这几方面来介绍一个算法。
                        </p>
                        <h3>什么是插值</h3>
                        <p>
                            首先插值所要做的事情，大体上来说，就是已知n个数据点，要找一个函数，使得其图像通过所给的n个数据点。当我们在做这件事情的时候，我们实际上假设所给的n个数据点来源于一个未知的函数，而找一个函数使其通过这些数据点，其实想要做的是找一个函数逼近那个提供数据点的未知函数。因而插值是属于数值逼近的内容。
                            有两个角度理解这个算法：
                            当我们输入数据点而得到一个插值函数的时候，我们由有限的插值点得到了一个由无限被插值点组成的插值函数，换言之，是由有限的信息估计出了无穷的信息。所以我们自然地希望按某种方法从插值点得到的插值函数能够唯一，这样会比较简单。
                            但从另一个角度看，我们是如何得到插值点的呢？是从某一个未知的函数关系式中抽取出来的，这毫无疑问是一个压缩信息的过程：将一个含无限个点的实函数压缩成了有限个插值点。
                            从这里我们就可以回答，什么是插值呢？插值其实就是一个解压缩的过程，它其实是函数求值的逆过程——由值求函数。我们希望通过解压缩，来看到压缩之前的那个未知函数长什么样子。这样做的好处是，我们能用一个相较于原来的未知函数更简单的函数来替代未知函数；这样做的代价在于，我们会损失一些精度，而我们所能做的就是，尽可能地降低这个代价。
                        </p>
                        <h3>牛顿差值法</h3>
                        <p>牛顿插值多项式的思路与拉格朗日插值不同之处在于，拉格朗日插值让每一个插值横坐标 [公式] 代入后多项式均只剩下一项，只需要控制好这一项的取值即可；而牛顿插值多项式让每一个插值横坐标 [公式] 代入后多项式剩下i项，现在则要控制这 [公式] 项的取值使之等于 [公式] 即可。先给出计算公式如下：
                            可以看到这当中有许多 [公式] 形式的式子，这叫差商，有n个点参与便表示这n个点构成的n-1阶差商，它的表达式为：
                            首先我们先看看牛顿公式的特点。一是如上所言，牛顿插值多项式让每一个插值横坐标 [公式] 代入后多项式剩下i项，要构造这i项的系数以达成插值条件；二是为方便记忆，可以看出牛顿插值多项式的样子十分像泰勒展开式：第i项为i-1次多项式乘以i-1阶差商，只不过牛顿插值多项式并不除以阶乘了。
                            然后要看看差商的性质。
                            图片来自徐萃薇、孙绳武编的《计算方法引论》
                            许多数值分析书上都会有这么一张类似的图表，它的含义是，用n+1个函数值，两个两个地计算一阶差商，可以得到n个一阶差商；然后用这些一阶差商，两个两个地计算二阶差商，就能得到n-1个二阶差商，依次往下。而牛顿插值多项式的各项系数就是位于每列最上方的划线的这些差商。
                            最后，牛顿插值有一个拉格朗日插值没有的优点，就是当需要新增插值点的时候，拉格朗日插值需要将所有的基函数重新算过，而牛顿插值只需要在之前算得的插值多项式的基础上新增一项，即：
                            这是十分方便的。
                            误差：余项表达
                            此处直接将误差余项式子放上来，不作推导：
                            图片来自徐萃薇、孙绳武编的《计算方法引论》
                            其中： [公式] .
                            （还记得刚刚有说牛顿插值多项式神似泰勒展开式吗？此处余项是否也神似泰勒余项呢？）
                            </p>
                    </article>
                </Content>
            </div>
        );
    }
}

export default Contents;