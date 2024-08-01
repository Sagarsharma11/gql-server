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

    type Query{
        # hello:String
        # wow: String
        users:[User]
        courses:[Course]
        course(id:ID!): Course
        # section:[Section]
        # lecture:[lecture]
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

    type Mutation{
        course(input: AddCourseInput ):response
    }
`;
