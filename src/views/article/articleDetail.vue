<template>
  <div class="article-detail">
    <div class="detail-container">
      <div class="detail-left">
        <span @click="niceClick">
          <el-badge
            :value="niceCount"
            class="item"
            :type="isNice ? 'success' : 'info'"
            ><i
              class="iconfont icon-dianzan1"
              :class="isNice ? 'niceed' : 'nonice'"
            ></i></el-badge
        ></span>

        <!-- <span @click="niceClick"><i class="iconfont icon-dianzan1"></i></span> -->
        <span @click="commentClick">
          <el-badge :value="12" type="info" class="item">
            <i class="iconfont icon-pinglun"></i>
          </el-badge>
        </span>
        <span @click="shareClick"><i class="iconfont icon-fenxiang"></i></span>
      </div>
      <div class="detail-main">
        <div class="main-header">
          <div class="header-left">
            <el-avatar
              class="avatar"
              shape="circle"
              :size="40"
              :src="avatar"
              @click.native="avatarClick"
            ></el-avatar>
          </div>
          <div class="header-right">
            <p>用户名</p>
            <div>
              <span>2021年09月02日</span>
              <span> 阅读 {{ 59525 }}</span>
            </div>
          </div>
        </div>
        <div class="main-cover">
          <img :src="cover" alt="" />
        </div>
        <div class="main-title">
          <h1>这是一段标题</h1>
        </div>
        <div class="main-content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
          iusto. Mollitia animi ullam facilis nesciunt repudiandae quo? Quos
          accusantium est nobis. Velit officia autem optio perferendis ipsa
          excepturi odio inventore? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Et nulla labore, optio sit ullam iste, id beatae
          earum perferendis quaerat suscipit, ab nesciunt excepturi eligendi
          dolore temporibus cumque reiciendis consequatur. Incidunt maxime
          reiciendis corrupti perferendis nulla beatae iure voluptatem suscipit
          eveniet veritatis iste, eius sunt molestiae magni non fugit, commodi
          corporis earum tenetur ipsum aperiam ut? Eveniet cumque reprehenderit
          accusantium? Voluptas, eos distinctio expedita excepturi sapiente
          aliquam saepe laborum, eligendi quisquam error praesentium esse
          reiciendis voluptatum laudantium placeat architecto! Nihil provident
          placeat reiciendis consequatur aut dolorum iusto vel ut sit. Ipsa
          provident nostrum, veniam tenetur impedit maxime consequatur inventore
          ab blanditiis accusamus quae eum sunt facere natus odit illo possimus,
          architecto, eos maiores eligendi in! Laborum, accusantium. Vel,
          exercitationem quae! Nesciunt nihil id cum porro, eligendi
          exercitationem maxime esse necessitatibus odio aperiam, error eos
          beatae? Itaque, dolorum expedita, architecto eum iure tempora quisquam
          quidem quas animi non magni quod consequatur. Suscipit perferendis
          provident vitae fugiat aut culpa? Quis, id magni dolorum enim est qui
          ipsa sint asperiores commodi officia itaque magnam! Quas eos, facere
          ex unde tenetur dolore quibusdam optio. Ipsam iste nesciunt qui velit
          magni recusandae possimus a dolorem rem? Fugiat laborum facilis quos
          ut, laudantium deleniti. Velit harum voluptatem, esse amet repudiandae
          delectus possimus quisquam quas ab dolorum? Reprehenderit animi
          facilis cum totam consequuntur? Doloremque repudiandae praesentium
          asperiores quam facere tempore, soluta qui dolore nihil quia fugiat
          quis dolorum culpa ratione, totam repellat, cum nisi. Consectetur,
          laudantium culpa! Quia in autem tempora aliquam ducimus eos temporibus
          perspiciatis maxime. Doloribus quas consequuntur ea nisi libero,
          voluptatibus ut neque? Iusto aperiam architecto quos maiores et
          pariatur laboriosam assumenda soluta nobis! Vel, magni nulla quos
          magnam dolores quae cum consequuntur consectetur omnis neque, impedit
          modi nihil esse quas odit fugit similique totam. Eos provident tempora
          atque suscipit, quibusdam rerum obcaecati hic? Animi distinctio soluta
          commodi doloremque ab ad, tempora eveniet asperiores sint magnam,
          corporis exercitationem natus consequatur accusamus maxime debitis.
          Assumenda dignissimos deserunt veniam ipsa atque quidem iure
          necessitatibus, quia ab? Eius delectus expedita quidem quam maiores
          dolor. Aliquam exercitationem sapiente, nihil voluptates magni maxime
          nostrum accusantium ipsum animi, delectus ipsa ullam quaerat. Aliquid,
          minus sapiente? Beatae animi accusamus quis numquam. Reiciendis quidem
          obcaecati sed reprehenderit voluptatibus, dolor maiores id repellendus
          alias? Quos odio corporis a tempore nostrum sunt velit, repellendus
          quam quo quis, provident nemo tempora ex! Aliquid, nobis hic. Optio
          sint aliquid labore laborum voluptas itaque, cumque sequi sed dolorem
          perspiciatis sit ipsum alias at! Fugit amet quibusdam, nesciunt
          voluptatum molestias et cum perferendis unde, nihil ullam libero
          velit! Eius cupiditate consectetur ipsam temporibus ab, vel magni
          voluptatum tempora impedit repudiandae. Accusamus iure, vel ipsa ea
          placeat consequatur itaque sed dolores eos quaerat numquam deleniti
          ipsam repellat corrupti incidunt. Ducimus quasi repellendus magnam
          quae eaque nostrum porro adipisci ratione, velit eum hic iste. Optio
          exercitationem magni cum, harum inventore ut repellendus autem
          voluptatum distinctio fugiat ad nulla doloribus accusantium. Provident
          cumque facere totam illo doloremque nostrum tempora suscipit alias!
          Magnam earum, animi et ipsam cumque nobis, recusandae labore odio
          dolorem consequatur cupiditate delectus, non esse eius? Sint, quas
          molestiae! Adipisci voluptatibus totam repellat ipsam quaerat hic,
          maiores minus vero repellendus laboriosam! Deserunt eum esse
          exercitationem voluptate sit cum, magni nulla, perferendis inventore,
          animi quam! Repellat, rerum. Aspernatur, temporibus consectetur. Est
          ab libero rerum sequi dolorum ipsam nobis magnam numquam perferendis!
          Sit quod tempora delectus voluptas? Eaque, autem! Sed nihil error non
          ipsum vitae ducimus, quidem aliquam illum sequi omnis! Voluptatem eos
          quo dolorem non similique tenetur quasi sed modi neque? Tenetur cum
          illo quisquam. Consequuntur ipsa fugiat recusandae nesciunt, eligendi
          assumenda ipsam, deleniti consectetur aperiam, tenetur et beatae
          consequatur. Nostrum illum perspiciatis odio voluptate facere omnis
          modi ipsam excepturi totam facilis alias quas quasi ratione expedita
          recusandae culpa ea, fugiat maiores rerum corrupti iure voluptatibus.
          Sed sequi vitae rem? Vero consequuntur incidunt repudiandae quidem
          alias quia harum architecto numquam obcaecati necessitatibus. Quia
          repellat quis consequuntur expedita eligendi ipsam corrupti aperiam
          inventore debitis quisquam, harum, recusandae sequi ut in aut.
          Repellendus, voluptatibus doloribus? Nostrum soluta enim eius. Labore,
          voluptas eum quas fugit, illum quae architecto tempore sunt omnis,
          blanditiis in optio quaerat similique? Magni, quam? Illo odio labore
          minima aspernatur? Ratione sequi odio, itaque architecto totam culpa
          rem odit labore mollitia aperiam quod porro cupiditate aspernatur
          molestias quos quae minus. Beatae vero expedita, recusandae ex quae
          molestias assumenda. Dolores, delectus! Laboriosam perferendis non quo
          minima a autem tempore vitae labore sed reprehenderit consectetur
          officiis suscipit repellat reiciendis aliquid eum praesentium
          doloremque quaerat debitis, facilis facere distinctio aspernatur?
          Praesentium, unde minus! Labore ad culpa vel provident reprehenderit
          repudiandae aperiam facere? Tenetur pariatur ullam non, quae tempore
          facilis libero dicta modi quod neque odio dolorum aliquid illo
          repellendus voluptatum, qui ex est? Accusantium ullam aut obcaecati ut
          fuga eum voluptatem cum, cumque quisquam atque ratione blanditiis
          deserunt, voluptatum eligendi excepturi eius accusamus dolores,
          adipisci nostrum ea et ex voluptates. Possimus, praesentium explicabo!
          Illum tenetur dolorem dolor optio possimus, dolores mollitia ut? Sequi
          eligendi odio accusamus inventore, corporis provident veritatis facere
          molestiae suscipit ipsam perferendis! Libero, neque. Itaque quo
          excepturi deleniti ipsa eligendi. Quidem omnis cumque ipsam maxime
          veniam voluptas rem sint quibusdam illum ratione perferendis, alias
          rerum, sit libero laborum, quas quisquam temporibus odio! Nam ad
          ducimus dolores similique a non dicta? Aut debitis quos praesentium
          doloremque officia? Officia, mollitia exercitationem. Animi
          consectetur similique distinctio nostrum reiciendis itaque labore
          voluptas, alias quam quo praesentium, quibusdam repellat dolore!
          Repudiandae sunt assumenda excepturi minima! Harum cumque explicabo
          necessitatibus, hic accusamus nisi. A possimus maiores accusamus vel
          atque excepturi sequi, quam, ea sunt odit omnis distinctio deserunt
          impedit veritatis non. Corrupti neque perferendis fuga deserunt! Autem
          itaque praesentium sapiente odio laudantium fuga eius veniam unde.
          Consequatur, necessitatibus cumque. Iure culpa libero beatae aperiam
          cupiditate autem laudantium dolor, explicabo ex. Repudiandae quibusdam
          excepturi ratione expedita officiis? Commodi, sed provident? Quisquam
          veniam in aliquid voluptatem, quaerat ratione tenetur exercitationem
          reiciendis dolores eaque sequi natus, ut expedita beatae ex sint
          minima sit sapiente quia, animi soluta? Odio, dicta? Asperiores vero
          et, tenetur possimus nesciunt, alias, rerum vitae nulla exercitationem
          libero quos? Fugit reprehenderit dolores doloremque ratione placeat!
          Optio aliquid voluptatibus enim soluta blanditiis reprehenderit,
          repellendus nam ex inventore? Eveniet, doloribus dolore vero illo
          maxime deleniti? Sequi dolor accusantium numquam, quidem
          necessitatibus, cupiditate aut laborum recusandae voluptatibus debitis
          autem ex nobis quam accusamus aperiam eveniet, quo nihil! Temporibus,
          reiciendis? Culpa blanditiis, tenetur vel asperiores deserunt optio,
          dolores sapiente doloribus distinctio provident aut, dolorem illo fuga
          ipsum nam? Eos cupiditate assumenda qui suscipit sed officiis ipsa
          rerum amet alias aspernatur. Libero, ipsa fuga. Iure veniam eius
          laudantium exercitationem tempore tempora voluptatibus dolorem facilis
          dolorum eaque, repellendus commodi animi illum, amet veritatis
          suscipit omnis architecto quasi sequi. Iusto eaque nulla nostrum.
          Doloremque doloribus aut eveniet est eaque quasi eligendi, unde alias
          quia impedit esse, architecto non placeat sed? Asperiores, nam!
          Eveniet sapiente architecto voluptates, molestias maiores fuga
          consequatur doloremque vel adipisci? Excepturi consequatur beatae
          autem itaque cupiditate reprehenderit at nulla ab repudiandae
          accusantium? Ducimus, non. Asperiores quo ratione mollitia consectetur
          fuga voluptas quas itaque sit aliquam veniam, id dolorum rerum
          tempora. Minus nihil, aut deleniti magni quas atque, tenetur
          cupiditate mollitia quo quam doloribus explicabo earum repudiandae!
          Ducimus, dolor dolorem omnis, est sequi aliquid nulla qui unde
          voluptatum voluptatibus nobis esse. Provident nobis ratione beatae
          dolore ad mollitia nemo, amet id a voluptate praesentium quis minima
          sapiente odit eos quos at deserunt voluptatibus doloribus vel impedit
          consequatur odio! Voluptates, laboriosam tempore. Vitae repellat magni
          fuga minima, inventore dicta quaerat, temporibus, in dolorum dolores
          enim incidunt aliquam praesentium beatae optio perspiciatis quos animi
          sapiente distinctio repellendus ad. Eaque, iste. Error, alias nobis!
          Modi ut dolor iusto sapiente placeat facere porro culpa eius
          repudiandae esse mollitia perferendis, vero doloremque doloribus sint
          necessitatibus tempora fuga reiciendis et atque officia tenetur
          voluptas incidunt ea. Non? Vel itaque harum maxime inventore optio
          necessitatibus autem cupiditate ipsa velit quos, a, iure dignissimos
          id voluptatum, mollitia distinctio magnam doloribus perspiciatis
          cumque delectus quisquam fugit possimus. Impedit, voluptas voluptatum!
          Inventore accusantium optio beatae odit quae et minima ipsa, ex quasi
          in eligendi tenetur recusandae. Voluptatibus, tenetur! Soluta tempore
          quasi vero iste hic. A doloremque omnis dolorum, dolore molestias
          soluta? Earum voluptas soluta sed neque consectetur explicabo facilis
          tempora sint unde molestias blanditiis, pariatur similique quis facere
          at voluptatem, et beatae numquam itaque minus officiis deleniti
          doloremque nam error! Ipsa. Dignissimos atque officiis excepturi eum
          numquam assumenda, autem nihil porro aliquam quia. Omnis enim modi,
          nulla fugiat eligendi officia reiciendis incidunt ipsa, blanditiis
          autem facere dicta, vero cumque perspiciatis sapiente? Veritatis
          corporis voluptatum perspiciatis autem consectetur cupiditate? Nostrum
          nesciunt, molestiae rem sed aut quos omnis exercitationem consequatur
          amet veniam! Quos consectetur sunt fugiat aspernatur veniam ducimus
          illo asperiores aut? Est? Tempore cum nesciunt sapiente, magni nostrum
          iusto veniam. Numquam cum fugiat, porro, hic vero sit voluptatibus
          error perspiciatis minus eum ducimus in, minima nisi dicta expedita
          commodi reiciendis maxime repellendus? Illum animi consequatur
          voluptas neque blanditiis quisquam autem, nulla, tempore vitae ab
          voluptatem nemo pariatur! Repellendus quod reiciendis eveniet iste
          dolor omnis dolore hic eaque tenetur deleniti, perferendis harum
          exercitationem.
        </div>
        <div class="main-comment">
          <div class="comment-top">全部评论()</div>
          一个个评论组件
        </div>
      </div>
      <div class="detail-right">
        <div class="user-card">
          作者介绍
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNice: false,
      niceCount: 12,
      avatar:
        "http://test-zyd.oss-cn-beijing.aliyuncs.com/zhangyida/0417307-teudpo.jpg",
      cover:
        "https://test-zyd.oss-cn-beijing.aliyuncs.com/zhangyida/3393703-vwwwf6.png",
    };
  },
  methods: {
    niceClick() {
      this.isNice = !this.isNice;
      if (this.isNice) {
        this.niceCount++;
      } else {
        this.niceCount--;
      }
    },
    commentClick() {
      console.log("评论按钮");
    },
    shareClick() {
      const copyResult = this.copyToBoard(location.href);
      if (copyResult) {
        this.$message({
          type: "info",
          message: "复制成功",
        });
      }
    },
    copyToBoard(value) {
      const element = document.createElement("textarea");
      document.body.appendChild(element);
      element.value = value;
      element.select();
      if (document.execCommand("copy")) {
        document.execCommand("copy");
        document.body.removeChild(element);
        return true;
      }
      document.body.removeChild(element);
      return false;
    },
  },
};
</script>

<style lang="less" scoped>
@pHeight: 90px;
@import url("http://at.alicdn.com/t/font_2804341_sd009a4l2d8.css");
.article-detail {
  padding: 20px;
  height: 100%;
  box-sizing: border-box;
  .detail-container {
    position: relative;
    height: 100%;
    justify-content: space-between;
    .detail-left {
      width: 15%;
      left: 5%;
      box-sizing: border-box;
      height: 80vh;
      // border: 1px saddlebrown solid;
      position: fixed;
      span {
        position: absolute;
        cursor: pointer;
        right: 0;
        display: block;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: #fff;
        line-height: 36px;
        text-align: center;
        transition: 0.3s;
        &:hover {
          background-color: rgb(178, 187, 196);
          transform: scale(1.05, 1.05);
          .el-badge i {
            font-size: 18px;
            color: #fff;
          }
        }
        i {
          font-size: 17px;
          font-weight: 700;
          color: rgb(178, 186, 194);
          &.nonice {
            color: rgb(178, 186, 194);
          }
          &.niceed {
            color: rgb(103, 194, 58);
          }
        }

        &:nth-child(1) {
          top: @pHeight + 70px;
        }
        &:nth-child(2) {
          top: @pHeight * 2 + 70px;
        }
        &:nth-child(3) {
          top: @pHeight * 3 + 70px;
        }
      }
    }
    .detail-right {
      width: 20%;
      position: absolute;
      right: 5%;
      border: 1px sandybrown solid;
    }
    .detail-main {
      box-sizing: border-box;
      padding: 10px;
      position: absolute;
      width: 50%;
      left: 22%;
      background-color: #fff;
      .main-header {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        height: 50px;
        // background-color: aqua;
        margin-bottom: 10px;
        .header-left {
          display: flex;
          align-items: center;
          height: 100%;
          // line-height: 100%;
          width: 8%;
        }
        .header-right {
          padding: 0 5px;
          flex: 1;
          height: 100%;
          display: flex;
          box-sizing: border-box;
          flex-direction: column;
          p {
            margin-top: 5px;
            font-weight: 700;
            font-size: 16px;
            margin-bottom: 0;
          }
          div {
            color: #999;
            font-size: 14px;
          }
        }
      }
      .main-cover {
        width: 100%;
        text-align: center;
        img {
          width: 98%;
          margin: 0 auto;
          // height: 300px;
        }
      }
    }
  }
}
</style>
