import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Logo from "../../../assets/logo.svg";
import AddIcon from "../../../assets/addIcon.svg";
import ClipboardIcon from "../../../assets/clipboardIcon.svg";
import React, { useState } from "react";
import { styles } from "./styles";
import { Task, TaskType } from "../../components/Task";

export function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTask, setNewTask] = useState("");
  const tasksDone = tasks.reduce((finished, task) => {
    if (task.done) return finished + 1;
    return finished;
  }, 0);

  function handleAddTask() {
    setTasks([...tasks, { text: newTask, done: false }]);
    setNewTask("");
  }

  function handleRemoveTask(task: string) {
    setTasks(tasks.filter((t) => t.text !== task));
  }

  function handleCheckTask(task: string) {
    setTasks(tasks.map((t) => (t.text === task ? { ...t, done: !t.done } : t)));
  }

  return (
    <View style={styles.container}>
      <Logo height={32} width={110} style={styles.logo} />
      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            style={styles.input}
            value={newTask}
            onChangeText={setNewTask}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <AddIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.info}>
          <View style={styles.infoStat}>
            <Text style={styles.tasksCreatedText}>Criadas</Text>
            <View style={styles.infoCounter}>
              <Text style={styles.infoCounterNumber}>{tasks.length}</Text>
            </View>
          </View>
          <View style={styles.infoStat}>
            <Text style={styles.tasksDoneText}>Concluídas</Text>
            <View style={styles.infoCounter}>
              <Text style={styles.infoCounterNumber}>{tasksDone}</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.text}
          renderItem={({ item }) => (
            <Task
              task={item}
              onRemove={() => handleRemoveTask(item.text)}
              onCheck={() => handleCheckTask(item.text)}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyComponent}>
              <ClipboardIcon />
              <View>
                <Text style={styles.emptyComponentTitle}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.emptyComponentSubtitle}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}
