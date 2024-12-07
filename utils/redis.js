import { promisify } from 'util';
import { createClient } from 'redis';

class RedisClient {
  /**
   * The constructor sets up the Redis client and listens for connection events.
   */
  constructor() {
    this.client = createClient(); // Create a new Redis client
    this.isClientConnected = true; // Initially assume the client is connected
    this.client.on('error', (err) => {
      console.error('Redis client failed to connect:', err.message || err.toString());
      this.isClientConnected = false; // Set connection status to false if there's an error
    });
    this.client.on('connect', () => {
      this.isClientConnected = true;
    });
  }

  /**
   * This method checks if the Redis client is connected to the server.
   * @returns {boolean} Returns true if the client is connected, otherwise false.
   */
  isAlive() {
    return this.isClientConnected; // Return whether the client is connected or not
  }

  /**
   * This method retrieves the value of a given key from Redis.
   * @param {String} key The key of the item to get from Redis.
   * @returns {String | Object} The value of the key.
   */
  async get(key) {
    return promisify(this.client.GET).bind(this.client)(key);
  }

  /**
   * This method sets a key-value pair in Redis, with an expiration time.
   * @param {String} key The key of the item to store.
   * @param {String | Number | Boolean} value The value to store.
   * @param {Number} duration The time in seconds before the key expires.
   * @returns {Promise<void>} This function doesn't return any value, it just sets the key.
   */
  async set(key, value, duration) {
    await promisify(this.client.SETEX)
      .bind(this.client)(key, duration, value);
  }

  /**
   * This method deletes a key-value pair from Redis.
   * @param {String} key The key of the item to remove.
   * @returns {Promise<void>} This function doesn't return any value, it just removes the key.
   */
  async del(key) {
    await promisify(this.client.DEL).bind(this.client)(key);
  }
}

export const redisClient = new RedisClient();
export default redisClient;
