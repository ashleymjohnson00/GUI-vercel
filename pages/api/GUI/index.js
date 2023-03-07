export default async function handler(req, res){
    const fetchOptions= {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Headers": "*",
            "api-key": "gfVZxqWHUgLfnRox7AkuzwZKIirRiCUCIfE31dKvGUPO6N3Gc2cb4LMwd6rT2f4",
        },
    };
    const fetchBody = {
        dataSource: process.env.MONGODB_DATA_SOURCE,
        database: 'BAJAsecDB',
        collection: 'ThreatConfidence'
    };
    const baseUrl = 'https://us-east-2.aws.data.mongodb-api.com/app/data-mkrnx/endpoint/data/v1';

    try{
        switch (req.method){
            case "GET":
                const readData = await fetch('https://us-east-2.aws.data.mongodb-api.com/app/data-mkrnx/endpoint/data/v1/find' ,);
              

        }
    }catch (error){
        console.error(error);
        
    }
}

