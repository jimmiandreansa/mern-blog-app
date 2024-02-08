import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">Edit</Link>
            <Link to={`/posts/werwer/delete`} className="btn sm danger">Delete</Link>
          </div>
        </div>
        <h2>This is the post title!</h2>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officiis dolores quidem voluptate consequuntur, commodi tempora doloremque fuga. Fugit error ratione eaque voluptas debitis quasi totam, quidem distinctio accusantium earum cum illum, porro quisquam laborum veritatis soluta accusamus suscipit sequi?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel eos atque repellat quam, exercitationem deserunt modi officia rerum maxime error magnam harum at quibusdam pariatur ea odio laudantium accusamus quis omnis saepe accusantium dicta cupiditate ducimus quaerat? Neque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deleniti laborum placeat minima libero explicabo, doloribus ullam hic tempore beatae perferendis voluptatibus cumque, blanditiis quisquam! Facilis, tempore quibusdam. Error ut minus recusandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fugit recusandae veritatis ullam minima commodi quidem, sed totam incidunt enim, cum quos sit. Similique nesciunt porro possimus quibusdam excepturi animi eaque quam ut, atque vel, quod laborum aut maiores minus id quis omnis molestias laudantium quasi doloribus blanditiis. Pariatur minus numquam repudiandae quam eos, ullam enim, nam eaque praesentium nesciunt magni perferendis? Iure excepturi totam voluptatibus quos tempora, commodi nobis ipsam fugiat. Quaerat, eaque. Doloremque ab repudiandae libero commodi numquam sunt beatae a quasi quas, minus, in accusamus provident debitis temporibus perferendis pariatur. Repellat provident sed pariatur officiis cupiditate aspernatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ducimus quasi! Tenetur, voluptates quibusdam iusto ex possimus atque, itaque similique eos eveniet, velit nemo dolorum hic impedit quisquam corporis nostrum aliquam quae. Doloremque magnam facere voluptas nostrum ea nihil, minima eius molestias labore iste deleniti. Nemo eveniet explicabo, mollitia nostrum magnam distinctio tempora dolores soluta quia est numquam possimus delectus repudiandae omnis impedit tenetur quo? Eligendi cum dolorem voluptatibus velit repudiandae doloremque omnis, ducimus nemo magnam earum animi illum quod eum neque magni provident. Consectetur libero corporis recusandae dicta sit culpa, officia aliquam laudantium? Praesentium modi molestiae temporibus nemo, voluptas doloremque. Non, optio porro numquam dignissimos praesentium cupiditate ad consectetur deleniti tempora.
        </p>
      </div>
    </section>
  )
}

export default PostDetail