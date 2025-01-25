import { FormData } from '../interfaces/Form';
import { ApiMessage } from '../interfaces/ApiMessage';

const retrieveWholeList = async (): Promise<FormData[]> => {
  try {
    const response = await fetch('/api/bucketList', {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data: FormData[] = await response.json();

    if (!response.ok) {
      throw new Error('invalid response');
    }
    return data;
  } catch (error) {
    console.log('Error from data retrieval:', error);
    return [];
  }
  };

const createItem = async (body: FormData): Promise<FormData> => {
    try {
      const response = await fetch(
        '/api/bucketList/', {
          method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          body: JSON.stringify(body)
        }
  
      )
      const data: FormData = await response.json();
  
      if(!response.ok) {
        throw new Error('invalid API response, check network tab!');
      }
  
      return data;
  
    } catch (err) {
      console.log('Error from BucketList Creation: ', err);
      return Promise.reject('Could not create new post');
    }
  };

  const deleteItem = async (id: number): Promise<ApiMessage> => {
    try {
      const response = await fetch(
        `/api/bucketList/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )
      const data: ApiMessage = await response.json();
  
      if(!response.ok) {
        throw new Error('invalid API response, check network tab!');
      }
  
      return data;
    } catch (err) {
      console.error('Error in deleting item', err);
      return Promise.reject('Could not delete item');
    }
  };
  
  export { retrieveWholeList, createItem, deleteItem };
  