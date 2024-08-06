export const schema = `#graphql

    type User{
        _id: ID!
        name: String!
        email: String!
        password: String
        googleID: String
        role: String!
        avatar: String!
        verified: String!
        createdAt: String!
        updatedAt: String!
    }

    
    type UserInput{
        name: String!
        email: String!
        password: String
        googleID: String
        role: String!
        avatar: String!
        verified: String!
    }

    type Course{
        _id: ID!
        title: String!
        description: String!
        instructor: User!
        ratingsAverage: Int!
        ratingsQuantity: Int!
        price: Int!
        category: String!
        subCategory: String!
        level: String!
        language:String!
        whatYouWillLearn: [String!]!
        requirements: [String!]!
        targetAudience: [String!]!
        isPublished: Boolean!
        isFree: Boolean!
        isApproved: Boolean!
        isRejected: Boolean!
        isFeatured: Boolean!
        isTrending: Boolean!
        isBestseller:Boolean!
        coverImage:String!
        previewVideo: String!
        students: [String!]!
        createdAt:String!
        updatedAt:String!
    }

    type response{
        statusCode:Int!
        message:String!
        success:Boolean!
    }



    input AddCourseInput {
        title: String!
        description: String!
        instructor: ID! # Instructor should be an ID as it's a reference
        ratingsAverage: Int
        ratingsQuantity: Int
        price: Int!
        category: String!
        subCategory: String!
        level: String!
        language: String!
        whatYouWillLearn: [String!]!
        requirements: [String!]!
        targetAudience: [String!]!
        isPublished: Boolean
        isFree: Boolean
        isApproved: Boolean
        isRejected: Boolean
        isFeatured: Boolean
        isTrending: Boolean
        isBestseller: Boolean
        coverImage: String!
        previewVideo: String!
        students: [ID!]
    }

    input AddLectureInput {
        title:String!
        description:String!
        position:Int!
        # resources:[Resources]
        videoURL: videoURLInput
        duration: Int!
        # section:Section!
        courseId:ID!
        instructor:[ID!]
        isPublished:Boolean!
        isPreview:Boolean!
    }

    type Resources{
        _id:ID
        title:String
        url: String
    }

    # input addResourcesInput {
    #     title:String
    #     url: String
    # }

    type videoURL{
        _480px:String
        _720px:String
        _1080px:String
    }

    input videoURLInput{
        _480px:String
        _720px:String
        _1080px:String
    }

    type Lecture {
        _id:ID!
        title:String!
        description:String!
        position:Int!
        # resources:[Resources]
        videoURL: videoURL!
        duration: Int!
        # section:Section!
        course:Course!
        instructor:User!
        isPublished:Boolean!
        isPreview:Boolean!
        createdAt:String!
        updatedAt:String!

    }

    type Query{
        users:[User]
        courses:[Course]
        course(id:ID!): Course
        # section:[Section]
        lectures:[Lecture]
        lecture(id:ID!):Lecture
    }
    type Mutation{
        course(input: AddCourseInput ):response
        addLecture(input: AddLectureInput):response
        # addVideoUrl(input:addVideoURLInput):response 
    }
`;
