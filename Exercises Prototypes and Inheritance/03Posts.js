function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\n`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let result = super.toString() + `Rating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0) {
                result += '\nComments:';
                this.comments.forEach(comment => result += `\n * ${comment}`);
            }

            return result;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + `Views: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

const posts = solve();
const post = new posts.Post("Post", "Content");

console.log(post.toString());

const scm = new posts.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("1");
scm.addComment("2");
scm.addComment("3");

console.log(scm.toString());

const blogPost = new posts.BlogPost('t', 'c', 1);
blogPost.view().view().view();

console.log(blogPost.toString());