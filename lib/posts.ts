import path from 'path'
import { readFileSync } from 'fs';
import { globSync } from 'glob';
import matter from 'gray-matter';


const postsDirectory = path.join(process.cwd(), '/blogs');
export function getSortedPostsData() {
    const fileNames = globSync(postsDirectory + "/*.md");
    console.log(postsDirectory)
	const allPostsData = fileNames.map((fileName) => {
        console.log(fileName)

		const fullPath = path.join(process.cwd(), fileName);
		const fileContents = readFileSync(fullPath, "utf8");

		const matterResult = matter(fileContents);
        const {id, title, date, author, description, image} = matterResult.data
		return {
			id,
            title,
            description,
            image,
            date,
            author
		};
	});
	return allPostsData.sort((a, b) => {
		if (a.id < b.id) {
			return 1;
		} else {
			return -1;
		}
	});
}
