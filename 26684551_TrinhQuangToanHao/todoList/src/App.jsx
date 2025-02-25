import React from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useReducer } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Form, Stack } from "react-bootstrap";

const App = () => {
  const todoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return [...state, action.payload]
      case 'TOGGLE':
        return state.map(todo => {
          return todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        })
      case 'DELETE':
        return state.filter(todo => todo.id !== action.payload)
      default:
        return state
    }
  }

  const [todos, dispatch] = useReducer(todoReducer, [])
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef()

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const filterdTodos = useMemo(() => {
    return {
      incompleted: todos.filter(todo => !todo.completed),
      completed: todos.filter(todo => todo.completed)
    }
  }, [todos])

  const handleAddTodo = () => {
    if (!inputValue) return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    }

    dispatch({ type: 'ADD', payload: newTodo });
    setInputValue('');
    inputRef.current.focus();
  }

  const handleToggleTodo = (id) => {
    dispatch({ type: 'TOGGLE', payload: id })
  }

  const handleDeleteTodo = (id) => {
    dispatch({ type: 'DELETE', payload: id })
  }

  return (
    <Container>
      <h1>To-Do List</h1>
      <Container>
        <Form>
          <Form.Group style={{ display: 'flex' }}>
            <Form.Control type="text" placeholder="Enter your To-do" ref={inputRef} onChange={(e) => setInputValue(e.target.value)} />
            <Button style={{ marginLeft: '20px' }} onClick={handleAddTodo}>add Todo</Button>
          </Form.Group>
        </Form>
      </Container>

      <Stack gap={1} direction="horizontal" style={{ marginTop: '20px' }}>
        {todos.map((todo) => {
          return (
            <Container key={todo.id}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h2>{todo.text}</h2>
                    <h1>{todo.completed ? 'Completed' : 'Incompleted'}</h1>
                  </Card.Title>
                  <Card.Text>
                    <Container style={{ display: 'flex', justifyContent: 'end' }}>
                      <Button onClick={() => handleToggleTodo(todo.id)} variant="success" style={{ marginRight: '10px' }} disabled={todo.completed}>Toggle</Button>
                      <Button onClick={() => handleDeleteTodo(todo.id)} variant="danger">Delete</Button>
                    </Container>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Container>
          )
        })}
      </Stack>
    </Container>
  )
}

export default App